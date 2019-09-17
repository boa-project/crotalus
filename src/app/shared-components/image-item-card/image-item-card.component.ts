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
  alternates = ['original'];

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
    if (size === 'original') {
      return 'Original';
    } else {
      switch (size) {
        case 'medium.png':
          return 'Mediano';

        case 'small.png':
          return 'Pequeño';

        case 'thumb.png':
          return 'Miniatura';

        default:
          break;
      }
    }
  }

  get isResourceInSameDomain(): boolean {
    return this.currentDomain === this.resourceDomain;
  }

}