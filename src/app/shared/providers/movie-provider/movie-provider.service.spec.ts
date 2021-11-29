import { TestBed } from '@angular/core/testing';
import { FEED_ROW_DATA_MOCK, FEED_ROW_DATA_LIST_MOCK } from '@shared/utils/mocks/movies-feed.mocks';
import { MovieProviderService } from './movie-provider.service';

describe('MovieProviderService', () => {
  let service: MovieProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieProviderService],
    });

    service = TestBed.inject(MovieProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate object properly', () => {
    const rowDataList = service.feedToMovieRowDataList(FEED_ROW_DATA_MOCK);

    expect(rowDataList).toEqual(FEED_ROW_DATA_LIST_MOCK);
  });
});
