import { BoaResource } from './../models/boa-resource.interface';
import { SearchTypes } from './../models/search-type.enum';
import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { SearchService } from '../services/search.service';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar, MatDialog } from '@angular/material';
import { AppSettings } from '../services/app-settings.service';
import { Router } from '@angular/router';
import { DetailsViewComponent } from '../details-view/details-view.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  valueToSearch: string='educación';
  results: any[];
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;
  resultsSize: number;
  minLetters: number;
  searchDone = false;
  isSearching = false;
  noMoreResults = false;
  searchType: SearchTypes = SearchTypes.all;
  audioCurrentlyPlaying: HTMLAudioElement | null = null;

  constructor(
    private searchService: SearchService,
    private changeDetector: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private appSettings: AppSettings,
  ) {
    this.resultsSize = appSettings.options.resultsResponseSize;
    this.minLetters = appSettings.options.minLetters;
  }

  search(firstCall: boolean): void {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }

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
    this.searchService.search(this.valueToSearch, firstCall, this.searchType).subscribe((results: BoaResource[][]) => {

      // const resultsToShow = {
      //   images: [],
      //   videos: []
      // }
      // results.forEach(result => {
      //   if (result.manifest.entrypoint.includes('.mp4')) {
      //     resultsToShow.videos.push(result);
      //   } else {
      //     resultsToShow.images.push(result);
      //   }
      // })
      const flattenedResults = results.flat();


      this.searchDone = true;
      this.isSearching = false;
      const lastResults = flattenedResults;
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

  showSnackBar(message: string, action: string): void {
    this.snackBarRef = this.snackBar.open(message, action, {
      duration: 6000,
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.snackBarRef.dismiss();
    });
  }

  onUpButtonClick = (): void => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.onUpButtonClick);
      window.scrollTo(0, c - c / 5);
    }
  }


  playEvent(event: HTMLAudioElement): void {
    const audioPlayer = event;
    if (this.audioCurrentlyPlaying && !audioPlayer.paused) {
      this.audioCurrentlyPlaying.pause();
      this.audioCurrentlyPlaying.currentTime = 0;
      this.audioCurrentlyPlaying = audioPlayer;
    } else if (!this.audioCurrentlyPlaying && !audioPlayer.paused) {
      this.audioCurrentlyPlaying = audioPlayer;
    }
  }

  shouldClearAudioPlaying(): void {
    if (this.audioCurrentlyPlaying) {
      this.clearAudioCurrentlyPlaying();
    }
  }

  clearAudioCurrentlyPlaying(): void {
    this.audioCurrentlyPlaying.pause();
    this.audioCurrentlyPlaying.currentTime = 0;
    this.audioCurrentlyPlaying = null;
  }

  showResourceDetails(aboutString: string) {
    this.shouldClearAudioPlaying();
    this.dialog.open( DetailsViewComponent, {
      panelClass: 'details-view-modal',
      data: {
        aboutString: aboutString,
      }
    });
  }

  get shouldShowMoreResultsSpinner(): boolean {
    return (this.results && this.results.length > 0) && !this.noMoreResults;
  }

  get shouldShowUpButton(): boolean {
    return window.pageYOffset > window.innerHeight;
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
