import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImageHandlerComponent,
    ImageItemCardComponent
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
  providers: [AppSettingsServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
