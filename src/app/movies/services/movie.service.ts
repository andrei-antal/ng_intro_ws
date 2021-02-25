import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { List } from 'immutable';
import { Movie, MOVIES_LIST } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: BehaviorSubject<List<Movie>> = new BehaviorSubject(
    List(MOVIES_LIST)
  );
  public readonly movies$: Observable<
    Movie[]
  > = this.movies.asObservable().pipe(map((list) => list.toArray()));

  constructor() {}

  updateComment(movieId: string, newComment: string) {
    const moviesList = this.movies.getValue();
    const index = moviesList.findIndex((movie) => movie.id === movieId);
    this.movies.next(moviesList.setIn([index, 'comment'], newComment));
  }

  deleteMovie(movieId: string) {
    const moviesList = this.movies.getValue();
    const index = moviesList.findIndex((movie) => movie.id === movieId);
    this.movies.next(moviesList.delete(index));
  }
}
