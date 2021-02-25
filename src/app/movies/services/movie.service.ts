import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Movie, MOVIES_LIST } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesList: List<Movie> = List(MOVIES_LIST);

  constructor() {}

  get movies(): Movie[] {
    return this.moviesList.toArray();
  }

  updateComment(movieId: string, newComment: string) {
    const index = this.moviesList.findIndex((movie) => movie.id === movieId);
    this.moviesList = this.moviesList.setIn([index, 'comment'], newComment);
  }

  deleteMovie(movieId: string) {
    const index = this.moviesList.findIndex((movie) => movie.id === movieId);
    this.moviesList = this.moviesList.delete(index);
  }
}
