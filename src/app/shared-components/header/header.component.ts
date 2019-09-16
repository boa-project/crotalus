import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('infoTextRef') infoTextRef: TemplateRef<any>;
  @ViewChild('helpTextRef') helpTextRef: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

}
