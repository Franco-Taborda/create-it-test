import { Component, OnInit } from '@angular/core';
import { SmartComponent } from '@core/components/smart.component';
import { MoviesState } from '@models/movies/store';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { selectNotNullTopMoviesFeed, fetchTopMoviesFeed } from '@models/movies/store/';
import { IMovieFeedDetailList } from '@models/movies/interface/movie.interface';
import { IMoviesRowDataList } from '@models/movies/interface/movies-row.interface';
import { MovieProviderService } from '@shared/providers/movie-provider/movie-provider.service';
import { IBillboard } from '@models/movies/interface/billboard.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent extends SmartComponent implements OnInit {
  private topMoviesFeed: IMovieFeedDetailList;
  public billboard: IBillboard;
  public topMoviesRowData: IMoviesRowDataList;

  constructor(private store: Store<MoviesState>, private movieProviderService: MovieProviderService) {
    super();
  }

  ngOnInit() {
    this.initializeSubscriptions();
    this.fetchFeed();
  }

  private initializeSubscriptions(): void {
    this.store
      .pipe(selectNotNullTopMoviesFeed, takeUntil(this.unsubscribe$))
      .subscribe((moviesList) => this.feedFetchHandler(moviesList));
  }

  private fetchFeed(): void {
    this.store.dispatch(fetchTopMoviesFeed({}));
  }

  private feedFetchHandler(moviesFeed: IMovieFeedDetailList | null): void {
    if (moviesFeed) {
      this.topMoviesFeed = moviesFeed;
      this.billboard = {
        bgImgSrc: this.movieProviderService.getBiggerImage(moviesFeed[0]['im:image'][0]?.label ?? ''),
        releaseDate: moviesFeed[0]['im:releaseDate'].attributes?.label ?? '',
        summary: moviesFeed[0].summary?.label ?? '',
        title: moviesFeed[0]['im:name']?.label ?? '',
      };
      this.topMoviesRowData = this.movieProviderService.feedToMovieRowDataList(moviesFeed);
    }
  }

  public onFilterTopMovies(query: string): void {
    this.topMoviesRowData =
      query !== ''
        ? this.movieProviderService.filterFeedByString(this.topMoviesFeed, query)
        : this.movieProviderService.feedToMovieRowDataList(this.topMoviesFeed);
  }
}
