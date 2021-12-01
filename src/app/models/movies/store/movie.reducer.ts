import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { IMovieFeedDetailList } from '../interface/movie.interface';
import * as fromMovieActions from './movie.actions';

export const moviesFeatureKey = 'moviesFeatureKey';

export interface MoviesState {
  topMoviesFeed: IMovieFeedDetailList | null;
  topMoviesFeedError: HttpErrorResponse | null;
}

export const initialState: MoviesState = {
  topMoviesFeed: null,
  topMoviesFeedError: null,
};

const moduleReducer = createReducer(
  initialState,
  // Single Module
  on(fromMovieActions.fetchTopMoviesFeedSuccess, (state, { topMoviesFeed }) => ({ ...state, topMoviesFeed })),
  on(fromMovieActions.fetchTopMoviesFeedFailure, (state, { topMoviesFeedError }) => ({ ...state, topMoviesFeedError })),
  on(fromMovieActions.clearTopMoviesFeed, (state) => ({ ...state, topMoviesFeed: null, topMoviesFeedError: null })),
);

export function reducer(state: MoviesState | undefined, action: Action) {
  return moduleReducer(state, action);
}
