import React from 'react';
import ReactDOM from 'react-dom/client';

import {OfferData} from './mocks/offers_mocks';
import {City} from './mocks/city_mocks';
import App from './components/app/app';

const Setting = {
  OffersCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={OfferData} city={City} offersCount={Setting.OffersCount}/>
  </React.StrictMode>,
);
