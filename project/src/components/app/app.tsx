import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import {TCity, TOffer, TReview} from '../../types/types';


type AppProps = {
  nearOffers: TOffer[];
  city: TCity;
  cities: string[];
  filters: string[];
  reviews: TReview[];
}

const App = ({nearOffers, city, cities, filters, reviews}:AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<Main city={city} cities={cities} filters={filters}/>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room reviews={reviews} nearOffers={nearOffers} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
