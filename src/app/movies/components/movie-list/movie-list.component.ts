import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';
import { debounceTime, map, startWith, takeUntil } from 'rxjs/operators';

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
  @ViewChild('searchField') private searchField: ElementRef;
  private destroy$ = new Subject();

  constructor(public movieService: MovieService) {}

  public ngOnInit(): void {
    this.movies$ = this.movieService.movies$;
    this.movieService.getMovies();
  }

  public ngAfterViewInit(): void {
    this.movies$ = this.movieService.movies$;
    fromEvent(this.searchField.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map((ev: any) => ev.target.value),
        startWith(''),
        takeUntil(this.destroy$)
      )
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
