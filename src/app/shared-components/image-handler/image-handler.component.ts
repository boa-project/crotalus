import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-handler',
  templateUrl: './image-handler.component.html',
  styleUrls: ['./image-handler.component.scss']
})
export class ImageHandlerComponent {
  
  @Input() imageUrl: string;
  imageVisible = false;

  showImage(): void {
    this.imageVisible = true;
  }

}
