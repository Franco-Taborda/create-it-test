import { Injectable } from '@angular/core';
import { IMovieFeedDetail, IMovieFeedDetailList } from '@models/movies/interface/movie.interface';
import { IMoviesRowDataList } from '@models/movies/interface/movies-row.interface';

@Injectable({
  providedIn: 'any',
})
export class MovieProviderService {
  constructor() {}

  feedToMovieRowDataList(feed: IMovieFeedDetailList): IMoviesRowDataList {
    return feed.map((movie) => ({
      id: movie.id.label ?? '',
      imgSrc: this.getBiggerImage(movie['im:image'][0].label ?? '', 300),
      label: movie['im:name'].label ?? '',
    }));
  }

  getBiggerImage(imgSrc: string, size = 1000): string {
    return imgSrc.replace(/\/\d*x\d*bb.png/, `/${size}x${size}bb.webp`);
  }

  /**
   * Compares a string against movie name, movie title and movie summary
   * @param feed feed data
   * @param query string used to compare agains movies data
   * @returns a list of movies to be displayed
   */
  filterFeedByString(feed: IMovieFeedDetailList, query: string): IMoviesRowDataList {
    const comparison = (movie: IMovieFeedDetail): boolean => {
      return new RegExp(query, 'i').test(`${movie['im:name'].label}${movie.title.label}${movie.summary.label}`);
    };

    return query !== '' ? this.feedToMovieRowDataList(feed.filter(comparison)) : [];
  }
}
