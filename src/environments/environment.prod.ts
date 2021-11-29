
// const FRONT_URL = 'http://localhost:4200';
const API_URL_ITUNES = 'http://itunes.apple.com';

export const environment = {
  production: true,
  addresses: {
    lookupMovie: `${API_URL_ITUNES}/lookup`,
    topMoviesFeed: `${API_URL_ITUNES}/us/rss/topmovies/limit={{limit}}/json`,
  },
  paths: {
    home: 'home',
  },
};
