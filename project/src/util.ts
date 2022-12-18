import {TOffer} from './types/types';
import {Filter} from './const';

export const convertRating = (rating:number) => {
  const widtth = `${Math.round(rating) * 20 }%`;
  return {width: widtth};
};

export const sortOffers = function(offers: TOffer[], currentFilter: string): TOffer[] {
  const sortedOffers = offers.slice();
  switch (currentFilter) {
    case Filter.PriceUp:
      sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case Filter.PriceDown:
      sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case Filter.TopRated:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    case Filter.Popular:
      return sortedOffers;
  }
  return sortedOffers;
};


