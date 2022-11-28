import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page.component";
import { NewsPageComponent } from "./components/news-page.component";
import { MoviesPageComponent } from "./components/movies-page.component";
import { TvShowsPageComponent } from "./components/tv-shows-page.component";
import { CelebsPageComponent } from "./components/celebs-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "news", component: NewsPageComponent },
  { path: "movies", component: MoviesPageComponent },
  { path: "tv-shows", component: TvShowsPageComponent },
  { path: "celebs", component: CelebsPageComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
