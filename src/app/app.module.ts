import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule, MatSnackBarModule, MatProgressSpinnerModule, MatDialogModule, MatMenuModule, MatChipsModule, MatSliderModule } from "@angular/material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageHandlerComponent } from './components/image-handler/image-handler.component';
import { AppSettingsServiceProvider } from './services/app-settings.service.provider';
import { ImageVideoItemCardComponent } from './shared-components/image-video-item-card/image-video-item-card.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { HeaderComponent } from './components/header/header.component';
import { GeneralResultCardComponent } from './components/general-result-card/general-result-card.component';
import { SimpleAudioPlayerComponent } from './components/simple-audio-player/simple-audio-player.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ImagePlayerComponent } from './components/image-player/image-player.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
import { HtmlPlayerComponent } from './components/html-player/html-player.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImageHandlerComponent,
    ImageVideoItemCardComponent,
    DetailsViewComponent,
    HeaderComponent,
    GeneralResultCardComponent,
    SimpleAudioPlayerComponent,
    AudioPlayerComponent,
    VideoPlayerComponent,
    ImagePlayerComponent,
    ImageLoaderComponent,
    HtmlPlayerComponent,
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
    MatDialogModule,
    MatMenuModule,
    MatChipsModule,
    MatSliderModule
  ],
  providers: [
    AppSettingsServiceProvider,
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
