import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieService } from '@core/services/movie/movie.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromMovieActions from './movie.actions';

@Injectable()
export class MoviesEffects {
  loadTopMoviesFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMovieActions.fetchTopMoviesFeed),
      switchMap((action) =>
        this.movieService.fetchTopMovies(action.limit).pipe(
          map((topMoviesFeed) => fromMovieActions.fetchTopMoviesFeedSuccess({ topMoviesFeed })),
          catchError((topMoviesFeedError: HttpErrorResponse) =>
            of(fromMovieActions.fetchTopMoviesFeedFailure({ topMoviesFeedError })),
          ),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}
}
