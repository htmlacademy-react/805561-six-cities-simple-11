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


export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

//export const FILTERS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
export const FILTERS = Object.values(Filter);

export const INITITIAL_CITY = 'Paris';

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';
