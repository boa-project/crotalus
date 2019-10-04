import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-handler',
  templateUrl: './image-handler.component.html',
  styleUrls: ['./image-handler.component.scss']
})
export class ImageHandlerComponent {
  readonly minimumSize = '250px';
  @Input() imageUrl: string;
  @Input() imageAlt = '';
  @Input() placeholderWidth = this.minimumSize;
  @Input() placeholderHeight = this.minimumSize;
  @Input() imageMaxHeight = this.minimumSize;
  @Input() imageMaxWidth = '';
  @Input() transparentBackground = false;
  @Output() imageLoadError = new EventEmitter();
  imageVisible = false;

  constructor() { }

  showImage(): void {
    this.imageVisible = true;
  }
}
