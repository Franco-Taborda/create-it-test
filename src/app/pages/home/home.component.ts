import { Component, OnInit } from '@angular/core';
import { SmartComponent } from '@core/components/smart.component';
import { MoviesState } from '@models/movies/store';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { selectNotNullTopMoviesFeed, fetchTopMoviesFeed } from '@models/movies/store/';
import { IMovieFeedDetailList } from '@models/movies/interface/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent extends SmartComponent implements OnInit {
  public bgImgSource: string;

  constructor(private store: Store<MoviesState>) {
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
      this.bgImgSource = moviesFeed[0]['im:image'][0]?.label?.replace(/\/\d*x\d*bb.png/, '/1000x1000bb.webp') ?? '';
    }
  }
}
