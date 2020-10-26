import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-html-player',
  templateUrl: './html-player.component.html',
  styleUrls: ['./html-player.component.scss'],
})
export class HtmlPlayerComponent implements OnChanges {

  @Input() data: string;
  @Output() openDocument = new EventEmitter();

  enablePlayer = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data') && changes.data.currentValue !== undefined) {
      this.enablePlayer = true;
    }
  }
}
