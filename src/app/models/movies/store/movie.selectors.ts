import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MoviesState, moviesFeatureKey } from './movie.reducer';

export const selectMoviesFeature = createFeatureSelector<MoviesState>(moviesFeatureKey);

export const selectTopMoviesFeed = createSelector(selectMoviesFeature, (state: MoviesState) => state.topMoviesFeed);
export const selectTopMoviesFeedError = createSelector(
  selectMoviesFeature,
  (state: MoviesState) => state.topMoviesFeedError,
);

// Pipeable operators

export const selectNotNullTopMoviesFeed = pipe(
  select(selectTopMoviesFeed),
  filter((val) => val !== null),
);
export const selectNotNullTopMoviesFeedError = pipe(
  select(selectTopMoviesFeedError),
  filter((val) => val !== null),
);
