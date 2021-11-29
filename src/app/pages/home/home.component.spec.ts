import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { moviesFeatureKey, MoviesState } from '@models/movies/store';
import { HomeComponent } from './home.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MovieService } from '@core/services/movie/movie.service';
import { MOVIES_FEED_DETAILS_LIST_MOCK } from '@shared/utils/mocks/movies-feed.mocks';
import { findComponentByDirective } from '@shared/utils/test-utils';
import { HomeViewComponent } from './view/home-view.component';
import { DebugElement } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockStore: MockStore<MoviesState>;
  let viewComponent: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, HomeViewComponent],
        imports: [],
        providers: [
          MovieService,
          provideMockStore({ initialState: { [moviesFeatureKey]: MOVIES_FEED_DETAILS_LIST_MOCK } }),
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(HomeComponent);
          mockStore = TestBed.inject(MockStore);
          component = fixture.componentInstance;
          viewComponent = findComponentByDirective(fixture, HomeViewComponent);

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
    const expected = component.bgImgSource;

    expect(viewComponent.attributes['bgImgSource']).toBe(expected);
  });
});
