import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import getSizeLabel from "../../helpers/getSizeLabel";

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
  alternates = ['original'];
  mouseover = false;

  constructor() { }

  ngOnInit() {
    this.currentDomain = window.location.hostname;
    this.resourceDomain = this.imageItem.about.split('://')[1].split('/')[0];
    this.alternates = [...this.alternates, ...this.imageItem.manifest.alternate];
  }

  getThumbnailUrl(): string {
    // return `${this.imageItem.about}/!/${this.imageItem.manifest.customicon}`;
    return this.imageItem.manifest.customicon;
  }


  getPreviewUrl(): string {
    const alternateBaseRef = this.imageItem.id.split('/content/')[1];
    return `${this.imageItem.about}/!/.alternate/${alternateBaseRef}/preview.gif`;
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
      return `${this.imageItem.about}/!/${this.imageItem.manifest.entrypoint}`;
    } else {
      return `${this.imageItem.about}/!/.alternate/${this.imageItem.manifest.entrypoint}/${size}`;
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
