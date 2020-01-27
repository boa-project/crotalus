import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

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
  @Input() imageMaxWidth = '';
  @Input() transparentBackground = false;
  @Input() previewUrl?: string;
  @Input() mouseover?: boolean;
  @Output() imageLoadError = new EventEmitter();
  imageVisible = false;
  previewLoaded = false;
  localPreviewUrl: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  // ngOnInit(): void {

  // }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('previewUrl') && changes.previewUrl) {
      this.loadPreview();
    }
    if (changes.hasOwnProperty('mouseover') && this.previewUrl) {
      this.resetPreview();
    }
  }


  showImage(): void {
    this.imageVisible = true;
  }

  loadPreview(): void {
    this.localPreviewUrl = this.previewUrl;
    const img = new Image();
    img.src = this.previewUrl;
    img.onload = () => {
      console.log('preview ready!!! --------');
      this.previewLoaded = true;
    };
  }

  resetPreview(): void {
    if (this.mouseover && this.previewLoaded) {
      console.log('plase reset!!');
      this.localPreviewUrl = '';
      this.changeDetector.detectChanges();
      this.localPreviewUrl = this.previewUrl;
      this.changeDetector.detectChanges();
    }
  }
}
