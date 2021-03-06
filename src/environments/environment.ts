// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const FRONT_URL = 'http://localhost:4200';
const API_URL_ITUNES = 'http://itunes.apple.com';

export const environment = {
  production: false,
  addresses: {
    lookupMovie: `${API_URL_ITUNES}/lookup`,
    topMoviesFeed: `${API_URL_ITUNES}/us/rss/topmovies/limit={{limit}}/json`,
  },
  paths: {
    home: 'home',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
