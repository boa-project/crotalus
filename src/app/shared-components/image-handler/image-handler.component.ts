import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-handler',
  templateUrl: './image-handler.component.html',
  styleUrls: ['./image-handler.component.scss'],
})
export class ImageHandlerComponent implements OnChanges {
  readonly minimumSize = '250px';
  @Input() imageUrl: string;
  @Input() imageAlt = '';
  @Input() placeholderWidth = this.minimumSize;
  @Input() placeholderHeight = this.minimumSize;
  @Input() imageMaxHeight = this.minimumSize;
  @Input() imageMaxWidth = this.minimumSize;
  @Input() transparentBackground = false;
  @Input() previewUrl?: string;
  @Input() mouseover?: boolean;
  @Input() backgroundColor?: string;
  @Output() imageLoadError = new EventEmitter();
  @ViewChild('previewBox') previewBox: ElementRef;
  imageVisible = false;
  previewLoaded = false;
  localPreviewUrl: string;

  constructor(private elementRef: ElementRef ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('previewUrl') && changes.previewUrl) {
      this.setBackgroundImg();
    }
    if (changes.hasOwnProperty('mouseover') && this.previewUrl) {
      this.resetPreview();
    }
    if (changes.hasOwnProperty('backgroundColor')) {
      this.elementRef.nativeElement.querySelector('.loader-background').style.backgroundColor = this.backgroundColor;
    }
  }


  showImage(): void {
    this.imageVisible = true;
  }

  resetPreview(): void {
    if (this.mouseover) {
      this.setBackgroundImg();
      this.previewBox.nativeElement.style.zIndex = '2';
    } else {
      this.previewBox.nativeElement.style.zIndex = '0';
    }
  }

  setBackgroundImg(): void {
    this.previewBox.nativeElement.style.backgroundImage = `url('')`;
    this.previewBox.nativeElement.style.backgroundImage = `url('${this.previewUrl}')`;
  }
}
