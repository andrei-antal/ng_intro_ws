import { Component } from '@angular/core';

@Component({
  selector: 'ngm-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  public movies = [
    {
      id: 1,
      title: 'Star Wars Episode IX: The Rise of Skywalker',
      year: 2019,
      genre: 'Action, Adventure, Fantasy',
      plot:
        'The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.',
      poster:
        'https://images-na.ssl-images-amazon.com/images/I/91rKEgY1qDL._SY679_@@._V1_SX300.jpg',
      comment: '',
      commentSaved: false,
    },
    {
      id: 2,
      title: 'Avengers: Endgame',
      year: 2019,
      genre: 'Action, Adventure, Drama',
      plot:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      poster:
        'https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SY445_@@._V1_SX300.jpg',
      comment: '',
      commentSaved: false,
    },
    {
      id: 3,
      title: 'Terminator: Dark Fate',
      year: 2019,
      genre: 'Action, Adventure, Sci-Fi',
      plot:
        "An augmented human and Sarah Connor must stop an advanced liquid Terminator, from hunting down a young girl, who's fate is critical to the human race.",
      poster:
        'https://images-na.ssl-images-amazon.com/images/I/911bTXwO--L._SL1500_@@._V1_SX300.jpg',
      comment: '',
      commentSaved: false,
    },
    {
      id: 4,
      title: 'John Wick: Chapter 3 - Parabellum',
      year: 2019,
      genre: 'Action, Crime, Thriller',
      plot:
        "John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      poster:
        'https://images-na.ssl-images-amazon.com/images/I/91XKS5MN9uL._SY741_@@._V1_SX300.jpg',
      comment: '',
      commentSaved: false,
    },
  ];

  public wordCount(comment: string): number {
    if (!comment || comment.length === 0) {
      return 0;
    } else {
      return comment.trim().replace(/  +/g, ' ').split(' ').length;
    }
  }

  public saveComment(id: number): void {
    const theMovie = this.movies.find((movie) => movie.id === id);
    theMovie.commentSaved = !theMovie.commentSaved;
  }

  public clearComment(id: number): void {
    const theMovie = this.movies.find((movie) => movie.id === id);
    theMovie.comment = '';
    theMovie.commentSaved = false;
  }

  public trackByFn(_: any, movie): number {
    return movie.id;
  }
}
