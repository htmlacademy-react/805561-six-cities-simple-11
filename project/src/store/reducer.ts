import {createReducer} from '@reduxjs/toolkit';
import {selectionCity, sortByCity, selectionFilter, sortByFilter} from './action';
import {OfferData} from '../mocks/offers_mocks';
import {INITITIAL_CITY, Filter} from '../const';
import {TOffer} from '../types/types';

const INITIAL_SORT = 'Popular'; //перенести в константы
const initialData = OfferData.filter((offer) => offer.city === INITITIAL_CITY );// по сути это  дуйствие filterByCity
// eslint-disable-next-line no-console
console.log(initialData);

const initialState = {
  city: INITITIAL_CITY,
  offerList: initialData,
  currentFilter: INITIAL_SORT,
};


const sort = function(offers: TOffer[], currentFilter: string): TOffer[] {
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
  }
  return sortedOffers;
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectionCity, (state, action) => {
      state.city = action.payload;
      // eslint-disable-next-line no-console
      //console.log(state.city);
    })
    .addCase(sortByCity, (state) => {
      state.offerList = OfferData.filter((offer) =>
        offer.city === state.city
      );
      // eslint-disable-next-line no-console
      //console.log(state.offerList);
    })
    .addCase(selectionFilter, (state, action) => {
      state.currentFilter = action.payload;
      // eslint-disable-next-line no-console
      console.log(state.currentFilter);
    })
    .addCase(sortByFilter, (state) => {
      state.offerList = sort(state.offerList, state.currentFilter);
    });

});

export {reducer};
