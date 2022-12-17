import {createAction} from '@reduxjs/toolkit';
import {TOffer, TReview} from '../types/types';
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

export const setCurrentOfferId = createAction('data/setCurrentOfferId',
  (value: number) => ({
    payload: value,
  })
);

export const loadOffers = createAction<TOffer[]>('data/loadOffers');
export const loadOffer = createAction<TOffer | undefined>('data/loadOffer');
export const loadNearOffers = createAction<TOffer[]>('data/loadNearOffers');
export const loadReviews = createAction<TReview[]>('data/loadReviews');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');
export const setReviewsDataLoadingStatus = createAction<boolean>('data/setReviewsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offers/setError');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
