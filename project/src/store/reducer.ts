import {createReducer} from '@reduxjs/toolkit';
import {selectionCity, getOfferList} from './action';
import {OfferData} from '../mocks/offers_mocks';

//const INITITIAL_CITY = 'Amsterdam';//перенести в константы
const INITITIAL_CITY = 'Paris';//перенести в константы
const initialData = OfferData.filter((offer) => offer.city === INITITIAL_CITY );
// eslint-disable-next-line no-console
console.log(initialData);

const initialState = {
  city: INITITIAL_CITY,
  offerList: initialData,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectionCity, (state, action) => {
      state.city = action.payload;
      // eslint-disable-next-line no-console
      console.log(state.city);
    })
    .addCase(getOfferList, (state) => {
      state.offerList = OfferData.filter((offer) =>
        offer.city === state.city
      );
      // eslint-disable-next-line no-console
      console.log(state.offerList);
    });
});

export {reducer};
