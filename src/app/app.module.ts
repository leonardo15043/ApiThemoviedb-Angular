import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { MoviesService } from './services/movies.service';
import { HttpModule , JsonpModule } from '@angular/http';

//Forms

import { FormsModule } from '@angular/forms';
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    MovieComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [ MoviesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
