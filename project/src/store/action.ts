import {createAction} from '@reduxjs/toolkit';
import {TOffer} from '../types/types';
import {AppRoute, AuthorizationStatus} from '../const';

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

export const loadOffers = createAction<TOffer[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offers/setError');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
