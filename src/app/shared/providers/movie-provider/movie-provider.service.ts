import { Injectable } from '@angular/core';
import { IMovieFeedDetailList } from '@models/movies/interface/movie.interface';
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
}
