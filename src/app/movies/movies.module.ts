import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from '../movies/components/movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { MovieItemSimpleComponent } from './components/movie-item-simple/movie-item-simple.component';
import { MovieListStaticComponent } from './components/movie-list-static/movie-list-static.component';
import { WordCountPipe } from './pipes/pipes/word-count.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: MovieListComponent },
      // { path: '', component: MovieItemSimpleComponent },
      // { path: '', component: MovieListStaticComponent },
      { path: 'new', component: MovieDetailComponent }, // movies/new
      { path: ':id', component: MovieDetailComponent }, // movies/1
    ]),
  ],
  declarations: [
    MovieItemComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieListStaticComponent,
    MovieItemSimpleComponent,
    WordCountPipe,
  ],
  exports: [MovieListComponent],
})
export class MoviesModule {}
