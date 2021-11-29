export interface IMovieDetail {
  wrapperType: string;
  kind: string;
  trackId: string;
  artistName: string;
  trackName: string;
  trackCensoredName: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  longDescription: string;
}

export interface IMovieLookup {
  resultCount: number;
  results: IMovieDetail[];
}

export interface IMovieFeedBaseDetail {
  label?: string;
  attributes?: unknown;
}

export interface IMovieFeedDetail {
  'im:name': IMovieFeedBaseDetail;
  'im:image': IMovieFeedBaseDetail[];
  summary: IMovieFeedBaseDetail;
  'im:price': IMovieFeedBaseDetail;
  'im:contentType': IMovieFeedBaseDetail;
  rights: IMovieFeedBaseDetail;
  title: IMovieFeedBaseDetail;
  link: unknown;
  id: IMovieFeedBaseDetail;
  'im:artist': IMovieFeedBaseDetail;
  category: IMovieFeedBaseDetail;
  'im:releaseDate': IMovieFeedBaseDetail;
}

export type IMovieFeedDetailList = IMovieFeedDetail[];

export interface IMovieFeed {
  feed: {
    author: {
      name: IMovieFeedBaseDetail;
      uri: IMovieFeedBaseDetail;
    };
    entry: IMovieFeedDetailList;
    updated: IMovieFeedBaseDetail;
    rights: IMovieFeedBaseDetail;
    title: IMovieFeedBaseDetail;
    icon: IMovieFeedBaseDetail;
    link: IMovieFeedBaseDetail[];
    id: IMovieFeedBaseDetail;
  };
}

export interface IMovieSearchAttributes {
  actorTerm?: string;
  genreIndex?: string;
  artistTerm?: string;
  shortFilmTerm?: string;
  producerTerm?: string;
  ratingTerm?: string;
  directorTerm?: string;
  releaseYearTerm?: string;
  featureFilmTerm?: string;
  movieArtistTerm?: string;
  movieTerm?: string;
  ratingIndex?: string;
  descriptionTerm?: string;
}
