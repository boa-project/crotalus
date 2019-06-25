import { Injectable } from '@angular/core';
import { initialConfig } from "../initialConfig";
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUri: any;
  filters: any;
  catalogues: any

  constructor(private http: HttpClient) {
    this.apiUri = initialConfig.apiuri;
    this.filters = initialConfig.filters;
    this.catalogues = initialConfig.catalogues;
  }

  search(value: string): Observable<any[]> {
    const cataloguesToSearchIn = this.catalogues.map(catalog => catalog.key);
    const requestsArray = cataloguesToSearchIn.map(catalogueKey =>
      this.http.get(this.createCatalogRequestUrl(value, catalogueKey))
    )
    return forkJoin([...requestsArray]);
  }

  createCatalogRequestUrl(value: string, catalogKey: string) {
    return `${this.apiUri}/c/${catalogKey}/resources.json?q=${value}&${this.generateRequestParams()}`
  }

  generateRequestParams() {
    const searchParams = `(n)=${initialConfig.options.suggestionsSize}&(s)=${initialConfig.options.resultsSize}`;
    const filters = this.filters.map(filter => {
      return filter.value.reduce((prevValue, actualItem, index) => {
        return prevValue + (index !== 0 ? '&' : '') + `(meta)[${filter.meta}][${index}]=${actualItem}`
      }, '');
    });
    return `${searchParams}&${filters.join('&')}`
  }
}
