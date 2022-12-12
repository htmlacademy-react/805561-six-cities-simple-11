import {createAction} from '@reduxjs/toolkit';

export const selectionCity = createAction('offers/selectionCity',
  (value: string) => ({
    payload: value,
  })
);

export const sortByCity = createAction('offers/filterByCity');

export const selectionFilter = createAction('offers/selectionFilter',
  (value: string) => ({
    payload: value,
  })
);

export const sortByFilter = createAction('offers/sortByFilter');
