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

  constructor(private searchService: SearchService, private snackBar: MatSnackBar) { }

  search() {
    
    if (this.snackBarRef)
    this.snackBarRef.dismiss();
    
    this.searchService.search(this.valueToSearch).subscribe(results => {
      if (!this.searchDone) {
        this.searchDone = true;
      }
      this.results = results && results[0];
      this.showSnackBar();
    });
  }

  getImageUrl(result): string {
    return `${result.about}/!/${result.manifest.entrypoint}`;
  }

  shouldDisableTooltip(titleElement) {
    return titleElement.offsetWidth === titleElement.scrollWidth;
  }

  shouldClearResults(): void {
    if (
      this.valueToSearch.length === 0 && (this.results && this.results.length === 0)
    ) {
      this.searchDone = false;
    }
  }

  showSnackBar() {
    let message = this.results.length === 0 ? 'Opps!! no hay resultados para tu búsqueda.' : `${this.results.length} resultados encontrados`;
    this.snackBarRef = this.snackBar.open(message, 'Cerrar', {
      duration: 6000,
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.snackBarRef.dismiss();
    })
  }
  
}
