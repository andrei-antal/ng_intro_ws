import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';

import { Movie } from '../../model/movie';
import { CommentUpdate } from '../movie-item/movie-item.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'ngm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, AfterViewInit, OnDestroy {
  public movies$: Observable<Movie[]>;
  public searchField = new FormControl('');
  private destroy$ = new Subject();

  constructor(public movieService: MovieService) {}

  public ngOnInit(): void {
    this.movies$ = this.movieService.movies$;
    this.movieService.getMovies();
  }

  public ngAfterViewInit(): void {
    this.movies$ = this.movieService.movies$;
    this.searchField.valueChanges
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((searchTerm) => this.movieService.getMovies(searchTerm));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public handleCommentUpdate(commentPayload: CommentUpdate): void {
    this.movieService
      .updateComment(commentPayload.id, commentPayload.newComment)
      .subscribe();
  }

  public handleMovieDelete(movieId: string): void {
    this.movieService.deleteMovie(movieId).subscribe();
  }

  public trackByFn(_: any, movie: Movie): string {
    return movie.id;
  }
}
