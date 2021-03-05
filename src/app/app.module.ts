import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    MoviesModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
