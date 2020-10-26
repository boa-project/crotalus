import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { AppSettings } from './app-settings.service';
import { SearchTypes, DocumentFormats } from '../models/search-type.enum';
import { BoaResource, BoaRepository, BoaCatalog } from '../models/boa-resource.interface';
import { getResourceType } from "../helpers";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUri: string;
  private apiRequestsCounter: number;
  private typesToSearchQueryString: string;
  private options: any;
  private repositories: BoaRepository[];
  // filters: any[];

  constructor(private http: HttpClient, private appSettings:AppSettings) {
    this.repositories = appSettings.repositories;
    this.options = appSettings.options;
    // this.filters = appSettings.filters;
  }

  search(value: string, firstCall: boolean, searchType: SearchTypes): Observable<BoaResource[][]> {
    if (firstCall) {
      this.apiRequestsCounter = 0;
    }
    this.setTypeFilterForSearch(searchType);
    return this.createSearchRequest(value);
  }

  createSearchRequest(value: string): Observable<BoaResource[][]> {
    const requestToPerform = this.repositories.map(
      (repository: BoaRepository) => {
        return this.http.get(this.createRepositoryRequestUrl(value, repository)).pipe(
          map((singleRepoResults: BoaResource[]) => {
            return singleRepoResults.map((result: BoaResource) => {
              result.type = getResourceType(result);
              result.repositoryName = `${repository.name} / ${this.getCatalogTitle(repository, result.catalog_id)}`;
              return result;
            });
          }),
        );
      }
    );

    return forkJoin([...requestToPerform]).pipe(
      tap(() => {
        this.apiRequestsCounter += 1;
      })
    );
  }

  getCatalogTitle(repository: BoaRepository, catalogId: string): string {
    return repository.catalogs.find(catalog => catalog.key === catalogId).title;
  }

  createRepositoryRequestUrl(value: string, repository: BoaRepository) {
    const repoCatalogues = repository.catalogs.map((catalog: BoaCatalog) => catalog.key).join('|');
    return `${repository.api}c/[${repoCatalogues}]/resources.json?q=${value}&${this.generateRequestParams()}`;
  }

  generateRequestParams() {
    const responseSize = this.options.resultsResponseSize;
    const resultsOffset = responseSize * this.apiRequestsCounter;
    const searchParams = `(n)=${responseSize}&(s)=${resultsOffset}`;
    const filters = this.typesToSearchQueryString;
    // TODO: Include license filter in search
    // const generatedRequestParams = this.includeLicenses ?
    //   `${searchParams}${filters ? '&'+filters : ''}&${this.licensesFilterParam}` : `${searchParams}${filters ? '&'+filters : ''}`;
    const generatedRequestParams = `${searchParams}${filters ? '&'+filters : ''}`;
    return generatedRequestParams;
  }

  getResourceAbout(about: string) {
    return this.http.get(about);
  }

  setTypeFilterForSearch(searchType: SearchTypes) {
    const metadataType = 'metadata.technical.format';
    if (searchType === SearchTypes.all) {
      this.typesToSearchQueryString = '';
    } else if (searchType === SearchTypes.document) {
      this.typesToSearchQueryString = DocumentFormats.reduce((prevValue, actualItem, index) => {
        return prevValue + (index !== 0 ? '&' : '') + `(meta)[${metadataType}][${index}]="${actualItem}"`;
      }, '');
    } else if (searchType === SearchTypes.didacticUnit) {
      this.typesToSearchQueryString = '(meta)[metadata.educational.learning_resource_type]="temathic unit"'
    } else {
      this.typesToSearchQueryString = `(meta)[${metadataType}]=${searchType}`;
    }
  }

  // createCatalogRequestUrl(value: string, catalogKey: string) {
  //   return `${this.apiUri}/c/${catalogKey}/resources.json?q=${value}&${this.generateRequestParams()}`
  // }

  // generateRequestParams() {
  //   const responseSize = this.appSettings.options.resultsResponseSize;
  //   const resultsOffset = responseSize * this.apiRequestsCounter;
  //   const searchParams = `(n)=${responseSize}&(s)=${resultsOffset}`;
  //   const filters = this.filters.map(filter => {
  //     return filter.value.reduce((prevValue, actualItem, index) => {
  //       return prevValue + (index !== 0 ? '&' : '') + `(meta)[${filter.meta}][${index}]=${actualItem}`
  //     }, '');
  //   });
  //   return `${searchParams}&${filters.join('&')}`
  // }

}


// application/ecmascript, application/flash-video, application/illustrator, application/javascript, application/msword, application/octet-stream bin, application/pdf, application/postscript ps, application/rtf, application/vnd.corel-draw, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/x-asax, application/x-ascx, application/x-ashx, application/x-asmx, application/x-asp, application/x-bittorrent, application/x-bzip, application/x-bzip-compressed-tar, application/x-cd-image, application/x-chm, application/x-config, application/x-executable, application/x-font-ttf, application/x-jar, application/x-java, application/x-master-page, application/x-php, application/x-rar, application/x-rar-compressed, application/x-ruby, application/x-shellscript, application/x-shockwave-flash, application/x-web-config, application/x-wsdl, application/x-x509-ca-cert, application/xhtml+xml, application/zip,

// audio / ac3, audio / midi, audio / mpeg, audio / x - mp3 - playlist,

// image / bmp, image / gif, image / jpeg, image / png, image / svg + xml, image / tiff,

// text / css, text / html, text / mathml, text / plain, text / x - comma - separated - values, text / x - java, text / x - log, text / x - readme, text / x - sql, text / x - vb, text / x - xsl, text / xml,

// video / 3gpp, video / mp4, video / mpeg, video / x - ms - asf, video / x - ms - wmv, video / x - msvideo
