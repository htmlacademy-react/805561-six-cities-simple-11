import {createReducer} from '@reduxjs/toolkit';
import {selectionCity, sortByCity, selectionFilter, sortByFilter} from './action';
import {OfferData} from '../mocks/offers_mocks';
import {INITITIAL_CITY, Filter, INITIAL_SORT} from '../const';
import {TOffer} from '../types/types';


const initialData = OfferData.filter((offer) => offer.city === INITITIAL_CITY );

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
    })
    .addCase(sortByCity, (state) => {
      state.offerList = OfferData.filter((offer) =>
        offer.city === state.city
      );
    })
    .addCase(selectionFilter, (state, action) => {
      state.currentFilter = action.payload;
    })
    .addCase(sortByFilter, (state) => {
      state.offerList = sort(state.offerList, state.currentFilter);
    });
});

export {reducer};
