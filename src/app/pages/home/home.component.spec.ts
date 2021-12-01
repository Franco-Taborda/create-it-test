import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { moviesFeatureKey, MoviesState } from '@models/movies/store';
import { HomeComponent } from './home.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MovieService } from '@core/services/movie/movie.service';
import { MOVIES_FEED_DETAILS_LIST_MOCK } from '@shared/utils/mocks/movies-feed.mocks';
import { findComponentByDirective } from '@shared/utils/test-utils';
import { HomeViewComponent } from './view/home-view.component';
import { MovieProviderService } from '@shared/providers/movie-provider/movie-provider.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockStore: MockStore<MoviesState>;
  let viewComponent: HomeViewComponent;
  let movieProviderService: MovieProviderService;

  beforeEach(
    waitForAsync(() => {
      const MOVIES_STATE_MOCK: MoviesState = {
        topMoviesFeed: MOVIES_FEED_DETAILS_LIST_MOCK,
        topMoviesFeedError: null,
      };

      TestBed.configureTestingModule({
        imports: [FormsModule, CommonModule],
        declarations: [HomeComponent, HomeViewComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          MovieService,
          MovieProviderService,
          provideMockStore({ initialState: { [moviesFeatureKey]: MOVIES_STATE_MOCK } }),
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(HomeComponent);
          mockStore = TestBed.inject(MockStore);
          component = fixture.componentInstance;
          viewComponent = findComponentByDirective(fixture, HomeViewComponent).componentInstance;
          movieProviderService = TestBed.inject(MovieProviderService);

          fixture.detectChanges();
        });
    }),
  );

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should fetch top movies feed', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch');
    component.ngOnInit();

    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should set background image for view', () => {
    const rawImage = MOVIES_FEED_DETAILS_LIST_MOCK[0]['im:image'][0].label as string;
    const expected = movieProviderService.getBiggerImage(rawImage);

    expect(viewComponent['bgImgSource']).toBe(expected);
  });

  it('should set the top movies row data', () => {
    const expected = movieProviderService.feedToMovieRowDataList(MOVIES_FEED_DETAILS_LIST_MOCK);

    expect(component.topMoviesRowData).toEqual(expected);
    expect(viewComponent['topMoviesRowData']).toEqual(expected);
  });

  it('should set the top movies feed filtered items', () => {
    const query = 'Test';
    const expected = movieProviderService.filterFeedByString(MOVIES_FEED_DETAILS_LIST_MOCK, query);

    component.onFilterTopMovies(query);
    fixture.detectChanges();

    expect(viewComponent['topMoviesRowData']).toEqual(expected);
  });
});
