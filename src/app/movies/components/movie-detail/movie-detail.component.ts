import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { Movie } from '../../model/movie';
import { MoviesValidatorsService } from '../../services/movies-validators.service';

@Component({
  selector: 'ngm-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public movieForm: FormGroup = this.fb.group({
    title: this.fb.control('', Validators.required),
    genre: this.fb.control('', {
      updateOn: 'blur',
      validators: Validators.required,
      asyncValidators: this.movieValidators.genreAsync.bind(this),
    }),
    year: this.fb.control('', Validators.required),
    plot: this.fb.control('', Validators.required),
    poster: this.fb.control(''),
  });
  private movieId: string;
  private movie: Movie;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private movieValidators: MoviesValidatorsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((paramsMap): string => paramsMap.get('id')),
        tap((movieId) => (this.movieId = movieId)),
        switchMap((movieId) =>
          this.movieService
            .getMovie(movieId)
            .pipe(tap((movie) => (this.movie = movie)))
        )
      )
      .subscribe((movie) => {
        this.movieForm.patchValue(movie);
      });
  }

  onSubmit(): void {
    const { value } = this.movieForm;
    const modifiedMovie = {
      ...this.movie,
      ...value,
    };
    if (!this.movieId) {
      this.movieService.createMovie(modifiedMovie).subscribe(this.goBack);
    } else {
      this.movieService.updateMovie(modifiedMovie).subscribe(this.goBack);
    }
  }

  goBack = () => {
    this.router.navigate(['/movies']);
  };
}
