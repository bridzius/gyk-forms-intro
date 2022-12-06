import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieSearchService {
  constructor() {}

  getMovies(query: string, year?: number) {}
}
