/* eslint-disable max-len */
import { IMovieFeed, IMovieFeedDetail, IMovieFeedDetailList } from '@models/movies/interface/movie.interface';
import { IMoviesRowDataList } from '@models/movies/interface/movies-row.interface';
export const MOVIES_FEED_DETAILS_LIST_MOCK: IMovieFeedDetailList = [
  {
    'im:name': { label: 'Venom: Let There Be Carnage' },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Video116/v4/e2/f0/c6/e2f0c6ca-7687-812b-ba37-3a5bbec5d9f9/contsched.aqqjnfzv.lsr/39x60bb.png',
        attributes: { height: '60' },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Video116/v4/e2/f0/c6/e2f0c6ca-7687-812b-ba37-3a5bbec5d9f9/contsched.aqqjnfzv.lsr/39x60bb.png',
        attributes: { height: '60' },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Video116/v4/e2/f0/c6/e2f0c6ca-7687-812b-ba37-3a5bbec5d9f9/contsched.aqqjnfzv.lsr/113x170bb.png',
        attributes: { height: '170' },
      },
    ],
    summary: {
      label:
        'Tom Hardy returns to the big screen as the lethal protector Venom, one of Marvel’s greatest and most complex characters. In search of his next big story, journalist Eddie Brock lands an exclusive interview with convicted murderer and death row inmate Cletus Kasady (Woody Harrelson), who discovers Eddie’s secret and becomes the host for Carnage, a menacing and terrifying symbiote. Eddie and Venom must get past their contentious relationship and work together to defeat Carnage. Directed by Andy Serkis (Mowgli: Legend of the Jungle), the film also stars Michelle Williams, and Naomie Harris as Shriek.',
    },
    'im:price': {
      label: '$19.99',
      attributes: { amount: '19.99', currency: 'USD' },
    },
    'im:contentType': {
      attributes: { term: 'Movie', label: 'Movie' },
    },
    rights: {
      label: '© 2021 Columbia Pictures Industries, Inc. All Rights Reserved.',
    },
    title: { label: 'Venom: Let There Be Carnage - Andy Serkis' },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://itunes.apple.com/us/movie/venom-let-there-be-carnage/id1586463531?uo=2',
        },
      },
      {
        'im:duration': { label: '122175.0' },
        attributes: {
          title: 'Preview',
          rel: 'enclosure',
          type: 'video/x-m4v',
          href: 'https://video-ssl.itunes.apple.com/itunes-assets/Video126/v4/af/14/0e/af140e53-8aca-22ec-f205-3850a621c05e/mzvf_99531290753870842.640x458.h264lc.U.p.m4v',
          'im:assetType': 'preview',
        },
      },
    ],
    id: {
      label: 'https://itunes.apple.com/us/movie/venom-let-there-be-carnage/id1586463531?uo=2',
      attributes: { 'im:id': '1586463531' },
    },
    'im:artist': { label: 'Andy Serkis' },
    category: {
      attributes: {
        'im:id': '4401',
        term: 'Action & Adventure',
        scheme: 'https://itunes.apple.com/us/genre/movies-action-adventure/id4401?uo=2',
        label: 'Action & Adventure',
      },
    },
    'im:releaseDate': {
      label: '2021-10-01T00:00:00-07:00',
      attributes: { label: 'October 1, 2021' },
    },
  },
];

export const FEED_ROW_DATA_MOCK: IMovieFeedDetailList = [
  {
    'im:name': { label: 'Test' },
    'im:image': [{ label: 'test/test.webp' }],
    id: { label: 'testId' },
  } as IMovieFeedDetail,
];

export const FEED_ROW_DATA_LIST_MOCK: IMoviesRowDataList = [{ id: 'testId', imgSrc: 'test/test.webp', label: 'Test' }];

export const MOVIES_FEED_MOCK: IMovieFeed = {
  feed: {
    author: {
      name: { label: 'iTunes Store' },
      uri: { label: 'http://www.apple.com/itunes/' },
    },
    entry: MOVIES_FEED_DETAILS_LIST_MOCK,
    updated: { label: '2021-11-28T15:18:01-07:00' },
    rights: { label: 'Copyright 2008 Apple Inc.' },
    title: { label: 'iTunes Store: Top Movies' },
    icon: { label: 'http://itunes.apple.com/favicon.ico' },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=15',
        },
      },
      {
        attributes: {
          rel: 'self',
          href: 'https://mzstoreservices-int-st.itunes.apple.com/us/rss/topmovies/limit=100/json',
        },
      },
    ],
    id: {
      label: 'https://mzstoreservices-int-st.itunes.apple.com/us/rss/topmovies/limit=100/json',
    },
  },
};
