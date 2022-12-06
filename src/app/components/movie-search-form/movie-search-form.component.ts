import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface MovieSearchForm {
  title: FormControl<string | null>;
  year: FormControl<number | null>;
}

@Component({
  selector: 'app-movie-search-form',
  templateUrl: './movie-search-form.component.html',
  styleUrls: ['./movie-search-form.component.scss'],
})
export class MovieSearchFormComponent {
  public movieSearchForm: FormGroup<MovieSearchForm>;
  constructor(formBuilder: FormBuilder) {
    this.movieSearchForm = formBuilder.group({
      title: formBuilder.control<string>(''),
      year: formBuilder.control<number | null>(null),
    });
  }

  findMovie() {
    console.log(this.movieSearchForm.value);
  }
}
