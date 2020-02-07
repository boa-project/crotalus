import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import getSizeLabel from "../../helpers/getSizeLabel";

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

  constructor() { }

  ngOnInit() {
    this.currentDomain = window.location.hostname;
    this.resourceDomain = this.itemInfo.about.split('://')[1].split('/')[0];
    this.alternates = [...this.alternates, ...this.itemInfo.manifest.alternate];
  }

  getThumbnailUrl(): string {
    // return `${this.imageItem.about}/!/${this.imageItem.manifest.customicon}`;
    return this.itemInfo.manifest.customicon;
  }


  getPreviewUrl(): string {
    const alternateBaseRef = this.itemInfo.id.split('/content/')[1];
    return `${this.itemInfo.about}/!/.alternate/${alternateBaseRef}/preview.gif`;
  }

  shouldDisableTooltip(titleElement): boolean {
    return titleElement.offsetWidth === titleElement.scrollWidth;
  }

  // getResourceDownloadUrl(): string {
  //   return `${this.imageItem.about}/!/${this.imageItem.manifest.entrypoint}`;
  // }

  // openResourceInNewWindow(): void {
  //   window.open(this.getResourceDownloadUrl(), '_blank');
  // }

  openDetails(): void {
    this.openDetailsEmitter.emit();
  }

  getResourceDownloadUrl(size: string): string {
    if (size === 'original') {
      return `${this.itemInfo.about}/!/${this.itemInfo.manifest.entrypoint}`;
    } else {
      return `${this.itemInfo.about}/!/.alternate/${this.itemInfo.manifest.entrypoint}/${size}`;
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

}