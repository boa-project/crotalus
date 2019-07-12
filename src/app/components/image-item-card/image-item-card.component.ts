import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-item-card',
  templateUrl: './image-item-card.component.html',
  styleUrls: ['./image-item-card.component.scss']
})
export class ImageItemCardComponent {

  @Input() imageItem: any;

  constructor() { }

  getThumbnailUrl(item): string {
    // return `${item.about}/!/${item.manifest.customicon}`;
    return item.manifest.customicon;
  }

  shouldDisableTooltip(titleElement): boolean {
    return titleElement.offsetWidth === titleElement.scrollWidth;
  }

}
