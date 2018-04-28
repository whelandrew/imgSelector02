import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { DropboxLoginComponent } from './dropbox-login/dropbox-login.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component'; 

import { AppRoutingModule }     from './app-routing.module';

import { SearchService } from './SearchService';

@NgModule({
  declarations: [
	AppComponent,
	DropboxLoginComponent,
	ImageSelectorComponent
  ],
  imports: [
  HttpModule,
  HttpClientModule,
	BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
