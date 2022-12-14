import {createReducer} from '@reduxjs/toolkit';
import {
  selectionCity,
  sortByCity,
  selectionFilter,
  sortByFilter,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setError
} from './action';
import {INITITIAL_CITY, Filter, INITIAL_SORT, AuthorizationStatus} from '../const';
import {TOffer} from '../types/types';


type TInitialState = {
  city: string;
  offerList: TOffer[];
  offerListSortedByCity: TOffer[];
  currentFilter: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState:TInitialState = {
  city: INITITIAL_CITY,
  offerList: [],
  offerListSortedByCity: [],
  currentFilter: INITIAL_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

const sortOffers = function(offers: TOffer[], currentFilter: string): TOffer[] {
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
      state.offerListSortedByCity = state.offerList.filter((offer) =>
        offer.city.name === state.city
      );
    })
    .addCase(selectionFilter, (state, action) => {
      state.currentFilter = action.payload;
    })
    .addCase(sortByFilter, (state) => {
      state.offerListSortedByCity = sortOffers(state.offerListSortedByCity, state.currentFilter);
    })
    .addCase(loadOffers, (state, action) => {
      state.offerList = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });

});

export {reducer};
