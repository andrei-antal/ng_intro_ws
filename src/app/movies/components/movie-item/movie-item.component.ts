import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  selector: 'ngm-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() public movie: Movie;
  public commentSaved: boolean;

  public wordCount(comment: string): number {
    if (!comment || comment.length === 0) {
      return 0;
    } else {
      return comment.trim().replace(/  +/g, ' ').split(' ').length;
    }
  }

  public saveComment(id: string): void {
    // const theMovie = this.movies.find((movie) => movie.id === id);
    // theMovie.commentSaved = !theMovie.commentSaved;
  }

  public clearComment(id: string): void {
    // const theMovie = this.movies.find((movie) => movie.id === id);
    // theMovie.comment = '';
    // theMovie.commentSaved = false;
  }
}
