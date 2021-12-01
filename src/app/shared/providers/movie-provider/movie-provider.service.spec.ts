import { TestBed } from '@angular/core/testing';
import { FEED_ROW_DATA_MOCK, FEED_ROW_DATA_LIST_MOCK, MOVIES_FEED_DETAILS_LIST_MOCK } from '@shared/utils/mocks/movies-feed.mocks';
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

  it('feedToMovieRowDataList should generate object properly', () => {
    const rowDataList = service.feedToMovieRowDataList(FEED_ROW_DATA_MOCK);

    expect(rowDataList).toEqual(FEED_ROW_DATA_LIST_MOCK);
  });

  it('filterFeedByString should return 0 results', () => {
    const result = service.filterFeedByString(MOVIES_FEED_DETAILS_LIST_MOCK, '');

    expect(result).toEqual([]);
  });

  it('filterFeedByString should return 1 result', () => {
    expect(service.filterFeedByString(MOVIES_FEED_DETAILS_LIST_MOCK, 'Venom').length).toBe(1);
    expect(service.filterFeedByString(MOVIES_FEED_DETAILS_LIST_MOCK, 'vEnoM').length).toBe(1);
    expect(service.filterFeedByString(MOVIES_FEED_DETAILS_LIST_MOCK, 'VENOM').length).toBe(1);
    expect(service.filterFeedByString(MOVIES_FEED_DETAILS_LIST_MOCK, 'venom').length).toBe(1);
  });
});
