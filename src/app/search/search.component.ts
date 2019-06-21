import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  valueToSearch: string;

  constructor( private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.valueToSearch).subscribe(data => console.log);
  }

}
