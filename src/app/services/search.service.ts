import { Injectable } from '@angular/core';
import { initialConfig } from "../initialConfig";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private apiUri: any;
  filters: any;
  catalogues: any

  constructor(private httpClient: HttpClient ) {
    this.apiUri = initialConfig.apiuri;
    this.filters = initialConfig.filters;
    this.catalogues = initialConfig.catalogues;
  }
  
  search(val: string) { 
  console.log('epa');
  
    return this.httpClient.get(this.createSearchUrl(val));
  }

  createSearchUrl(val:string) {
    return `https://boa.udem.edu.co/api/c/udem/resources.json?q=${val}&(n)=10&(s)=0&(meta)[metadata.technical.format][0]=video&(meta)[metadata.technical.format][1]=audio`
  }
}


// 
