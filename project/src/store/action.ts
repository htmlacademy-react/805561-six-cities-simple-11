import {createAction} from '@reduxjs/toolkit';

export const selectionCity = createAction('offers/selectionCity',
  (value: string) => ({
    payload: value,
  })
);

export const getOfferList = createAction('offers/getOfferList');
