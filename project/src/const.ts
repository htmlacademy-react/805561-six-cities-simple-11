import {TCities} from './types/types';

export enum AppRoute {
  Login = '/login',
  Room = '/offer/:id',
  Root = '/'
}

export enum Filter {
  Popular = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  TopRated = 'Top rated first'
}

export const FILTERS = Object.values(Filter);

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export const CITY: TCities = {
  Paris: {
    lat: 48.8534100,
    lng: 2.3488000,
    zoom: 12,
  },
  Cologne: {
    lat: 50.9333300,
    lng: 6.9500000,
    zoom: 12,
  },
  Brussels: {
    lat: 50.8504500,
    lng: 4.3487800,
    zoom: 12,
  },
  Amsterdam:{
    lat: 52.3740300,
    lng: 4.8896900,
    zoom: 12,
  },
  Hamburg: {
    lat: 53.5753200,
    lng: 10.0153400,
    zoom: 12,
  },
  Dusseldorf: {
    lat: 51.2217200,
    lng: 6.7761600,
    zoom: 12,
  }
};

export const CITIES = Object.keys(CITY);

export const INITITIAL_CITY = 'Paris';
export const INITIAL_SORT = 'Popular';

export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Main = '/hotels',
  Login = '/login',
  Logout = '/logout',
}
