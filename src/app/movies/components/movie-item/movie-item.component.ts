import { Component } from '@angular/core';

@Component({
  selector: 'ngm-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  public title = 'Star Wars Episode IX: The Rise of Skywalker';
  public year = 2019;
  public genre = 'Action, Adventure, Fantasy';
  public plot =
    'The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.';
  public poster =
    'https://images-na.ssl-images-amazon.com/images/I/91rKEgY1qDL._SY679_@@._V1_SX300.jpg';
  public movieComment = '';
  public commentSaved = false;

  public wordCount(comment: string): number {
    if (!comment || comment.length === 0) {
      return 0;
    } else {
      return comment.trim().replace(/  +/g, ' ').split(' ').length;
    }
  }

  public saveComment(): void {
    this.commentSaved = !this.commentSaved;
  }

  public clearComment(): void {
    this.commentSaved = false;
    this.movieComment = '';
  }
}
