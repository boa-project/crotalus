import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { SearchService } from '../services/search.service';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { AppSettingsService } from '../services/app-settings.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  valueToSearch: string = '*a*';
  results: any[];
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;
  resultsSize: number;
  minLetters: number;
  searchDone = false;
  isSearching = false;
  noMoreResults = false;

  constructor(
    private searchService: SearchService,
    private changeDetector: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    appSettings: AppSettingsService,
  ) {
    this.resultsSize = appSettings.options.resultsResponseSize;
    this.minLetters = appSettings.options.minLetters;
  }

  search(firstCall: boolean): void {

    if (this.valueToSearch.length < this.minLetters) {
      const message = `Texto de búsqueda mínimo de ${this.minLetters} letras`;
      this.showSnackBar(message, 'Cerrar');
      return;
    }

    if (firstCall) {
      this.results = [];
      this.noMoreResults = false;
    }
    this.isSearching = true;
    this.searchService.search(this.valueToSearch, firstCall).subscribe(results => {
      this.searchDone = true;
      this.isSearching = false;
      const lastResults = results[0];
      if (lastResults.length > 0 && lastResults.length < this.resultsSize) {
        this.results.push(...lastResults);
        this.noMoreResults = true;
      } else if (lastResults.length === 0) {
        this.noMoreResults = true;
        this.scrollToBottom();
      } else {
        this.results.push(...lastResults);
      }
    });
  }
  
  scrollToBottom() {
    this.changeDetector.detectChanges();
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }

  showSnackBar(message:string, action:string): void {
    this.snackBarRef = this.snackBar.open(message, action, {
      duration: 6000,
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.snackBarRef.dismiss();
    });
  }

  get shouldShowMoreResultsSpinner(): boolean {
    return (this.results && this.results.length > 0) && !this.noMoreResults;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      !this.noMoreResults &&
      window.pageYOffset + window.innerHeight >= (document.documentElement.offsetHeight - 90)
    ) {
      if (!this.isSearching) {
        this.search(false);
      }
    }
  }
  

}
