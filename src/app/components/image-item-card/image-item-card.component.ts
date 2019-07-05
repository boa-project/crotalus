import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-item-card',
  templateUrl: './image-item-card.component.html',
  styleUrls: ['./image-item-card.component.scss']
})
export class ImageItemCardComponent {

  @Input() imageItem: any;

  constructor() { }

  getImageUrl(item): string {
    return `${item.about}/!/${item.manifest.entrypoint}`;
  }

  shouldDisableTooltip(titleElement) {
    return titleElement.offsetWidth === titleElement.scrollWidth;
  }

}
