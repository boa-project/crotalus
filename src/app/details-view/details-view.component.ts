import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';
import { BoaResource, Contribution, BoaResourceSocial, BoaResourceManifest } from '../models/boa-resource.interface';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  resourceAboutUrl: string;
  resourceData: BoaResource;
  manifest: BoaResourceManifest;
  title: string;
  description: string;
  alternateBaseRef: string;
  format: string;
  imageSrc: string;
  keywords: string[];
  publishDate: string;
  rights: any;
  contributions: Contribution[];
  social: BoaResourceSocial;
  currentDomain: string;
  resourceDomain: string;
  entrypointName: string;
  alternates = ['original'];
  metadataDialogRef: MatDialogRef<any>;
  itemType: string;
  readonly MAX_COMPANY_LABEL_LENGTH = 30;

  @ViewChild('metadataRef') metadataTemplateRef: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.resourceAboutUrl = data.aboutString;
  }

  ngOnInit() {
    this.searchService.getResourceAbout(this.resourceAboutUrl).subscribe((aboutData: BoaResource) => {
      this.resourceData = aboutData;
      this.assignLocalVariables();
    });

    this.currentDomain = window.location.hostname;
    this.resourceDomain = this.resourceAboutUrl.split('://')[1].split('/')[0];
  }

  assignLocalVariables(): void {
    const metadata = this.resourceData.metadata;
    this.alternateBaseRef = this.resourceData.id.split('/content/')[1];
    this.manifest = this.resourceData.manifest;
    this.title = metadata.general.title.none;
    this.description = metadata.general.description.none;
    this.format = metadata.technical.format;
    this.itemType = this.format.split('/')[0];
    this.imageSrc = `${this.resourceAboutUrl}/!/.alternate/${this.alternateBaseRef}/${this.manifest.alternate[1]}`;
    this.keywords = metadata.general.keywords.none;
    this.contributions = metadata.lifecycle.contribution;
    this.publishDate = this.manifest.lastpublished.split('T')[0];
    this.rights = metadata.rights;
    this.social = this.resourceData.social;
    this.entrypointName = this.manifest.entrypoint.split('.')[0];
    this.alternates = [...this.alternates, ...this.manifest.alternate];
  }

  getResourceDownloadUrl(size: string): string {
    if (size === 'original') {
      return this.originalFileUrl;
    } else {
      return `${this.resourceAboutUrl}/!/.alternate/${this.alternateBaseRef}/${size}`;
    }
  }

  openResourceInNewWindow(size: string): void {
    window.open(this.getResourceDownloadUrl(size), '_blank');
  }

  getSizeLabel(size: string) {
    if (size === 'original') {
      return 'Original';
    } else {
      switch (size) {
        case 'medium.png':
          return 'Mediano';

        case 'small.png':
          return 'Pequeño';

        case 'thumb.png':
          return 'Miniatura';

        default:
          break;
      }
    }
  }

  showMetadata(): void {
    this.metadataDialogRef = this.dialog.open(this.metadataTemplateRef, {
      panelClass: 'metadata-modal'
    });
  }

  closeMetadataModal(): void {
    this.metadataDialogRef.close();
  }

  imageLoadError(): void {
    this.imageSrc = this.getResourceDownloadUrl('original');
  }

  cropContributionCompanyLabel(company: string): any {
    return company.length > this.MAX_COMPANY_LABEL_LENGTH;
  }

  getCompanyStringToShow(company: string): any {
    return company.length > this.MAX_COMPANY_LABEL_LENGTH ? company.slice(0, this.MAX_COMPANY_LABEL_LENGTH) : company;
  }

  get isResourceInSameDomain(): boolean {
    return this.currentDomain === this.resourceDomain;
  }

  get copyrightUrl(): string {
    if (this.rights.copyright === 'cc0') {
      return 'https://creativecommons.org/publicdomain/zero/1.0/deed.es';
    } else {
      const [license, version] = this.rights.copyright.split('cc ')[1].split(' ');
      return `http://creativecommons.org/licenses/${license}/${version}/`;
    }
  }

  get copyrightImageUrl(): string {
    if (this.rights.copyright === 'cc0') {
      return 'https://licensebuttons.net/l/zero/1.0/88x31.png';
    } else {
      const [license, version] = this.rights.copyright.split('cc ')[1].split(' ');
      return `https://licensebuttons.net/l/${license}/${version}/88x31.png`;
    }
  }

  get copyrightVersion(): any {
    if (this.rights.copyright === 'cc0') {
      return false;
    } else {
      return this.rights.copyright.split(' ').pop();
    }
  }

  get originalFileUrl(): string {
    return `${this.resourceAboutUrl}/!/${this.manifest.entrypoint}`;
  }

}
