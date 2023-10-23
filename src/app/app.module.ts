import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {RouterLink, ɵEmptyOutletComponent} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { GalleryComponent } from './components/gallery/gallery.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import { AboutComponent } from './components/about/about.component';
import { DevelProjComponent } from './components/devel-proj/devel-proj.component';
import { FilmProjComponent } from './components/film-proj/film-proj.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    AboutComponent,
    DevelProjComponent,
    FilmProjComponent,
    PhotographyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ɵEmptyOutletComponent,
    BrowserAnimationsModule,
    RouterLink,
    NgbModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
