import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';
import { BoaResource } from '../models/boa-resource.interface';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  resourceAboutUrl: string;
  resourceData: BoaResource;
  title: string;
  description: string;
  format: string;
  imageSrc: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
  ) {
    this.resourceAboutUrl = this.route.snapshot.paramMap.get('about');
  }

  ngOnInit() {
    this.searchService.getResourceAbout(this.resourceAboutUrl).subscribe((aboutData: BoaResource) => {
      this.resourceData = aboutData;
      this.assignLocalVariables();
    });
  }

  assignLocalVariables(): void {
    this.title = this.resourceData.metadata.general.title.none;
    this.description = this.resourceData.metadata.general.description.none;
    this.format = this.resourceData.metadata.technical.format;
    this.imageSrc = `${this.resourceAboutUrl}/!/${this.resourceData.manifest.alternate[0]}`;
  }

}












