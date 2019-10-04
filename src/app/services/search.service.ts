import { Injectable } from '@angular/core';
// import { initialConfig } from "../initialConfig";
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppSettings } from './app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUri: string;
  private apiRequestsCounter: number;
  filters: any[];
  catalogues: any[];


  constructor(private http: HttpClient, private appSettings:AppSettings) {
    this.apiUri = appSettings.apiUri;
    this.filters = appSettings.filters;
    this.catalogues = appSettings.catalogues;
  }

  search(value: string, firstCall: boolean): Observable<any[]> {
    if (firstCall) {
      this.apiRequestsCounter = 0;
    }
    const cataloguesToSearchIn = this.catalogues.map(catalog => catalog.key);
    const requestsArray = cataloguesToSearchIn.map(catalogueKey =>
      this.http.get(this.createCatalogRequestUrl(value, catalogueKey))
    )
    return forkJoin([...requestsArray]).pipe(
      tap(() => {
        this.apiRequestsCounter += 1;
      })
    );
  }


  createCatalogRequestUrl(value: string, catalogKey: string) {
    return `${this.apiUri}/c/${catalogKey}/resources.json?q=${value}&${this.generateRequestParams()}`
  }

  generateRequestParams() {
    const responseSize = this.appSettings.options.resultsResponseSize;
    const resultsOffset = responseSize * this.apiRequestsCounter;
    const searchParams = `(n)=${responseSize}&(s)=${resultsOffset}`;
    const filters = this.filters.map(filter => {
      return filter.value.reduce((prevValue, actualItem, index) => {
        return prevValue + (index !== 0 ? '&' : '') + `(meta)[${filter.meta}][${index}]=${actualItem}`
      }, '');
    });
    return `${searchParams}&${filters.join('&')}`
  }

  getResourceAbout(about: string) {
    return this.http.get(about);
  }
}


// application/ecmascript, application/flash-video, application/illustrator, application/javascript, application/msword, application/octet-stream bin, application/pdf, application/postscript ps, application/rtf, application/vnd.corel-draw, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/x-asax, application/x-ascx, application/x-ashx, application/x-asmx, application/x-asp, application/x-bittorrent, application/x-bzip, application/x-bzip-compressed-tar, application/x-cd-image, application/x-chm, application/x-config, application/x-executable, application/x-font-ttf, application/x-jar, application/x-java, application/x-master-page, application/x-php, application/x-rar, application/x-rar-compressed, application/x-ruby, application/x-shellscript, application/x-shockwave-flash, application/x-web-config, application/x-wsdl, application/x-x509-ca-cert, application/xhtml+xml, application/zip,

// audio / ac3, audio / midi, audio / mpeg, audio / x - mp3 - playlist,

// image / bmp, image / gif, image / jpeg, image / png, image / svg + xml, image / tiff,

// text / css, text / html, text / mathml, text / plain, text / x - comma - separated - values, text / x - java, text / x - log, text / x - readme, text / x - sql, text / x - vb, text / x - xsl, text / xml,

// video / 3gpp, video / mp4, video / mpeg, video / x - ms - asf, video / x - ms - wmv, video / x - msvideo
