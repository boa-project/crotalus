import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  valueToSearch: string;
  results: any[];
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;
  searchDone = false;
  isSearching = false;

  constructor(private searchService: SearchService, private snackBar: MatSnackBar) { }

  search() {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }
    this.isSearching = true;
    this.searchService.search(this.valueToSearch).subscribe(results => {
      if (!this.searchDone) {
        this.searchDone = true;
      }
      this.isSearching = false;
      this.results = results && results[0];
      this.showSnackBar();
    });
  }

  shouldClearResults(): void {
    if (
      this.valueToSearch.length === 0 && (this.results && this.results.length === 0)
    ) {
      this.searchDone = false;
    }
  }

  showSnackBar() {
    const message = this.results.length === 0 ?
      'Ooops!! No encontramos resultados para tu búsqueda.' :
      `${this.results.length} resultados encontrados`;
    this.snackBarRef = this.snackBar.open(message, 'Cerrar', {
      duration: 6000,
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.snackBarRef.dismiss();
    });
  }
}
