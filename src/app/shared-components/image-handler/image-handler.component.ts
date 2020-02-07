import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-image-handler',
  templateUrl: './image-handler.component.html',
  styleUrls: ['./image-handler.component.scss'],
})
export class ImageHandlerComponent implements OnChanges, AfterViewInit {
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

  constructor(private elementRef: ElementRef, private changeDetector: ChangeDetectorRef) { }

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

  ngAfterViewInit(): void {
    const componetWidth = this.elementRef.nativeElement.offsetWidth;
    if (componetWidth < parseInt(this.placeholderWidth.split('px')[0], 10)) {
      this.placeholderWidth = `${componetWidth}px`;
      this.placeholderHeight = `${componetWidth}px`;
    }
    this.changeDetector.detectChanges();
  }

  showImage(): void {
    this.placeholderWidth = 'auto';
    this.placeholderHeight = 'auto';
    this.imageVisible = true;
    this.changeDetector.detectChanges();
  }

  resetPreview(): void {
    if (this.mouseover && this.imageVisible) {
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
