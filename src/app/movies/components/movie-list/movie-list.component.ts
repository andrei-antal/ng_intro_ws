import { Component } from '@angular/core';
import { Movie } from '../../model/movie';
import { CommentUpdate } from '../movie-item/movie-item.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'ngm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  public movies: Movie[] = [];

  constructor(public movieService: MovieService) {}

  public handleCommentUpdate(commentPayload: CommentUpdate): void {
    this.movieService.updateComment(
      commentPayload.id,
      commentPayload.newComment
    );
  }

  public handleMovieDelete(movieId: string): void {
    this.movieService.deleteMovie(movieId);
  }

  public trackByFn(_: any, movie: Movie): string {
    return movie.id;
  }
}
