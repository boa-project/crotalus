import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import getSizeLabel from '../../helpers/getSizeLabel';

@Component({
  selector: 'app-image-video-item-card',
  templateUrl: './image-video-item-card.component.html',
  styleUrls: ['./image-video-item-card.component.scss']
})
export class ImageVideoItemCardComponent implements OnInit {

  @Input() itemInfo: any;
  @Output() openDetailsEmitter = new EventEmitter();
  currentDomain: string;
  resourceDomain: string;
  alternates = ['original'];
  mouseover = false;
  entrypointName: string;
  alternateBaseRef: string;

  constructor() { }

  ngOnInit() {
    this.currentDomain = window.location.hostname;
    this.resourceDomain = this.originalFileUrl.split('://')[1].split('/')[0];
    this.alternateBaseRef = this.itemInfo.id.split('/content/')[1];
    this.alternates = [...this.alternates, ...this.itemInfo.manifest.alternate];
  }

  getThumbnailUrl(): string {
    return this.itemInfo.manifest.customicon;
  }

  shouldDisableTooltip(titleElement): boolean {
    return titleElement.offsetWidth === titleElement.scrollWidth;
  }

  openDetails(): void {
    this.openDetailsEmitter.emit();
  }

  getResourceDownloadUrl(size: string): string {
    if (size === 'original') {
      return this.originalFileUrl;
    } else {
      this.entrypointName = this.itemInfo.manifest.entrypoint;
      return `${this.itemInfo.about}/!/.alternate/${this.alternateBaseRef}/${size}`;
    }
  }

  openResourceInNewWindow(size: string): void {
    window.open(this.getResourceDownloadUrl(size), '_blank');
  }

  getSizeLabel(size: string) {
    return getSizeLabel(size);
  }

  onMouseover(): void {
    this.mouseover = true;
  }

  onMouseleave(): void {
    this.mouseover = false;
  }

  get isResourceInSameDomain(): boolean {
    return this.currentDomain === this.resourceDomain;
  }

  get getVideoPreviewUrl(): string {
    return this.alternates.includes('preview.gif') ? this.getResourceDownloadUrl('preview.gif') : '';
  }

  get originalFileUrl(): string {
    if (this.itemInfo.manifest.hasOwnProperty('entrypoint')) {
      return `${this.itemInfo.about}/!/${this.itemInfo.manifest.entrypoint}`;
    }

    if (this.itemInfo.manifest.hasOwnProperty('url') && this.itemInfo.manifest.url.length) {
      return this.itemInfo.manifest.url;
    }

    return `${this.itemInfo.about}/!/`;
  }

}
