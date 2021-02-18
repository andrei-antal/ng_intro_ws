import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MovieItemComponent],
  exports: [MovieItemComponent],
})
export class MoviesModule {}
