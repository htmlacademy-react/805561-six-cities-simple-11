import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from './store';
import {ReviewsData} from './mocks/reviews_mocks';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {FILTERS} from './const';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';


store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        filters={FILTERS}
        reviews={ReviewsData}
      />
    </Provider>
  </React.StrictMode>,
);
