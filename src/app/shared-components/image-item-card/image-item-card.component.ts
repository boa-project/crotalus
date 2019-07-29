import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-item-card',
  templateUrl: './image-item-card.component.html',
  styleUrls: ['./image-item-card.component.scss']
})
export class ImageItemCardComponent implements OnInit {

  @Input() imageItem: any;
  @Output() openDetailsEmitter = new EventEmitter();
  currentDomain: string;
  resourceDomain: string;

  constructor() { }

  ngOnInit() {
    this.currentDomain = window.location.hostname;
    this.resourceDomain = this.imageItem.about.split('://')[1].split('/')[0];
  }

  getThumbnailUrl(): string {
    // return `${this.imageItem.about}/!/${this.imageItem.manifest.customicon}`;
    return this.imageItem.manifest.customicon;
  }

  shouldDisableTooltip(titleElement): boolean {
    return titleElement.offsetWidth === titleElement.scrollWidth;
  }

  getResourceDownloadUrl(): string {
    return `${this.imageItem.about}/!/${this.imageItem.manifest.entrypoint}`;
  }

  openResourceInNewWindow(): void {
    window.open(this.getResourceDownloadUrl(), '_blank');
  }

  openDetails(): void {
    this.openDetailsEmitter.emit();
  }

  get isResourceInSameDomain(): boolean {
    return this.currentDomain === this.resourceDomain;
  }

}
