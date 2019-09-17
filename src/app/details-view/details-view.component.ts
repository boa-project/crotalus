import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';
import { BoaResource, Contribution, BoaResourceSocial, BoaResourceManifest } from '../models/boa-resource.interface';
import { MatDialog } from '@angular/material';

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

  @ViewChild('metadataRef') metadataTemplateRef: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
    public dialog: MatDialog,
  ) {
    this.resourceAboutUrl = this.route.snapshot.paramMap.get('about');
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
    this.manifest = this.resourceData.manifest;
    this.title = metadata.general.title.none;
    this.description = metadata.general.description.none;
    this.format = metadata.technical.format;
    this.imageSrc = `${this.resourceAboutUrl}/!/.alternate/${this.manifest.entrypoint}/${this.manifest.alternate[0]}`;
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
      return `${this.resourceAboutUrl}/!/${this.manifest.entrypoint}`;
    } else {
      return `${this.resourceAboutUrl}/!/.alternate/${this.manifest.entrypoint}/${size}`;
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
    this.dialog.open(this.metadataTemplateRef, {
      panelClass: 'metadata-modal'
    });
  }

  get isResourceInSameDomain(): boolean {
    return this.currentDomain === this.resourceDomain;
  }
}
