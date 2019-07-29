import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule, MatSnackBarModule, MatProgressSpinnerModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageHandlerComponent } from './shared-components/image-handler/image-handler.component';
import { AppSettingsServiceProvider } from './services/app-settings.service.provider';
import { ImageItemCardComponent } from './shared-components/image-item-card/image-item-card.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { HeaderComponent } from './shared-components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImageHandlerComponent,
    ImageItemCardComponent,
    DetailsViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    AppSettingsServiceProvider,
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
