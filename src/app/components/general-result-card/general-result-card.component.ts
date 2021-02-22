import { BoaResource } from 'src/app/models/boa-resource.interface';
import { SearchTypes } from 'src/app/models/search-type.enum';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import * as Helpers from '../../helpers';

@Component({
  selector: 'app-general-result-card',
  templateUrl: './general-result-card.component.html',
  styleUrls: ['./general-result-card.component.scss'],
})
export class GeneralResultCardComponent {

  @Input() itemInfo: BoaResource;
  @Input() didacticUnitResult: boolean;
  @Output() openDetails = new EventEmitter();
  @Output() playEvent = new EventEmitter<HTMLAudioElement>();

  searchTypes = SearchTypes;
  isSmallScreen = false;

  constructor() {
    this.setSmallScreenFlag();
  }

  getItemTypeLabel(itemType): string {
    return Helpers.getItemTypeLabel(itemType);
  }

  getItemTypeIcon(itemType): string {
    return Helpers.getItemTypeIcon(itemType);
  }

  get originalFileUrl(): string {
    if (this.itemInfo.manifest.hasOwnProperty('entrypoint')) {
      return `${this.itemInfo.about}/!/${this.itemInfo.manifest.entrypoint}`;
    }

    if (this.itemInfo.manifest.hasOwnProperty('url') && this.itemInfo.manifest.url) {
      return this.itemInfo.manifest.url;
    }

    return `${this.itemInfo.about}/!/`;
  }

  get showDescription(): boolean {
    return this.itemInfo.metadata.general.description &&
      !!this.itemInfo.metadata.general.description.none;
  }

  get showTitle(): boolean {
    return this.itemInfo.metadata.general.title &&
      !!this.itemInfo.metadata.general.title.none;
  }

  setSmallScreenFlag(): void {
    if (window.innerWidth <= 767) { // 575px mobile breakpoint
      this.isSmallScreen = true;
    } else {
      this.isSmallScreen = false;
    }
  }

  @HostListener('window:resize')
    onResize() {
    this.setSmallScreenFlag();
    }
}
