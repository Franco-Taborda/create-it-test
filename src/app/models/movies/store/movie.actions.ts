import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IMovieFeedDetailList } from '../interface/movie.interface';

const enum TopMoviesFeedActionTypes {
  FETCH_TOP_MOVIES_FEED = '[Top Movies] FETCH_TOP_MOVIES_FEED',
  FETCH_TOP_MOVIES_FEED_SUCCESS = '[Top Movies] FETCH_TOP_MOVIES_FEED_SUCCESS',
  FETCH_TOP_MOVIES_FEED_FAILURE = '[Top Movies] FETCH_TOP_MOVIES_FEED_FAILURE',
  CLEAR_TOP_MOVIES_FEED = '[Top Movies] CLEAR_TOP_MOVIES_FEED',
}

export const fetchTopMoviesFeed = createAction(
  TopMoviesFeedActionTypes.FETCH_TOP_MOVIES_FEED,
  props<{ limit?: number }>(),
);

export const fetchTopMoviesFeedSuccess = createAction(
  TopMoviesFeedActionTypes.FETCH_TOP_MOVIES_FEED_SUCCESS,
  props<{ topMoviesFeed: IMovieFeedDetailList }>(),
);

export const fetchTopMoviesFeedFailure = createAction(
  TopMoviesFeedActionTypes.FETCH_TOP_MOVIES_FEED_FAILURE,
  props<{ topMoviesFeedError: HttpErrorResponse }>(),
);

export const clearTopMoviesFeed = createAction(TopMoviesFeedActionTypes.CLEAR_TOP_MOVIES_FEED);
