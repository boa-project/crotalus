import { AppSettings } from './../../services/app-settings.service';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('infoTextRef') infoTextRef: TemplateRef<any>;

  siteDescription: string;
  siteAboutInfo: string;
  companyLogoFileName: string;
  companyLogoPath: string;

  constructor(
    public dialog: MatDialog,
    appSettings: AppSettings,
    elementRef: ElementRef
  ) {
    this.siteDescription = appSettings.siteDescription;
    this.siteAboutInfo = appSettings.aboutInfo;
    this.companyLogoFileName = appSettings.companyLogoFileName;
    if (this.companyLogoFileName.length) {
      this.companyLogoPath = `assets/img/${this.companyLogoFileName}`;
    }
    if (!this.siteAboutInfo && !this.siteDescription) {
      elementRef.nativeElement.classList.add('no-description-box');
    }
   }

  showInfoDialog() {
    this.dialog.open(this.infoTextRef, {
      panelClass: 'info-modal',
      width: '400px',
    });
  }


}
