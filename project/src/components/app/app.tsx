import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import {CityType, OfferType} from '../../types/types';


type AppProps = {
  offersCount: number;
  offers: OfferType[];
  city: CityType;
}

const App = ({offers, offersCount, city}:AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<Main offers={offers} offersCount={offersCount} city={city} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
