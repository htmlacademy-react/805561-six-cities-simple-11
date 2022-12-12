import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from './store';
import {OfferData} from './mocks/offers_mocks';
import {ReviewsData} from './mocks/reviews_mocks';
import {City} from './mocks/city_mocks';
import App from './components/app/app';
import {Cities} from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        nearOffers={OfferData.slice(0, 3)}
        city={City}
        cities={Cities}
        reviews={ReviewsData}
      />
    </Provider>
  </React.StrictMode>,
);
