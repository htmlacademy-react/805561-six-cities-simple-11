import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import {Offer} from '../../types/types';

type AppScreenProps = {
  offersCount: number;
  offers: Offer[];
}

const App = ({offers, offersCount}:AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Main offers={offers} offersCount={offersCount} />} />
        <Route path='/login' element={<Login />} />
        {//так как все-таки правильно? так?
        }
        <Route path='/offer/:id' element={<Room />} />
        {//или так?
        }
        <Route path='/offer/'>
          <Route path='/offer/:id' element={<Room />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
