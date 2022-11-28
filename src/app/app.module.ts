import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page.component';
import { NewsPageComponent } from './components/news-page.component';
import { MoviesPageComponent } from './components/movies-page.component';
import { TvShowsPageComponent } from './components/tv-shows-page.component';
import { CelebsPageComponent } from './components/celebs-page.component';
import { NotFoundPageComponent } from './components/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewsPageComponent,
    MoviesPageComponent,
    TvShowsPageComponent,
    CelebsPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
