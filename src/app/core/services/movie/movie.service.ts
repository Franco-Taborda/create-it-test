import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovieDetail, IMovieFeed, IMovieFeedDetailList } from '@models/movies/interface/movie.interface';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { ApiEndpointBuilderService } from '@shared/providers/api-endpoint-builder.service';

@Injectable()
export class MovieService {
  constructor(private httpClient: HttpClient, private apiEndpointBuilderService: ApiEndpointBuilderService) {}

  lookupMovie(movieId: string): Observable<IMovieDetail> {
    return this.httpClient.get<IMovieDetail>(environment.addresses.lookupMovie, {
      params: {
        movieId,
      },
    });
  }

  fetchTopMovies(limit = 100): Observable<IMovieFeedDetailList> {
    const url = this.apiEndpointBuilderService.interpolateParams(environment.addresses.topMoviesFeed, {
      limit: `${limit}`,
    });

    return this.httpClient.get<IMovieFeed>(url).pipe(map((response: IMovieFeed) => response.feed.entry));
  }
}
