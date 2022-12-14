import {Routes, Route} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import {TReview} from '../../types/types';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


type AppProps = {
  filters: string[];
  reviews: TReview[];
}

const App = ({filters, reviews}:AppProps): JSX.Element => {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<Main filters={filters} />}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Room} element={<Room reviews={reviews} />}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
