import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-item-card',
  templateUrl: './image-item-card.component.html',
  styleUrls: ['./image-item-card.component.scss']
})
export class ImageItemCardComponent {

  @Input() imageItem: any;

  constructor() { }

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

}
