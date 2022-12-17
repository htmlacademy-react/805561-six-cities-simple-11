import {Routes, Route} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


type AppProps = {
  filters: string[];
}

const App = ({filters}:AppProps): JSX.Element => {

  const {isOffersDataLoading, authorizationStatus} = useAppSelector((state) => state);

  const {currentOffer, currentOfferId, nearOffers, isOfferDataLoading} = useAppSelector((state) => state);

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
          <Route
            path={`${AppRoute.Room}:id`}
            element={<Room
              currentOffer={currentOffer}
              currentOfferId={currentOfferId}
              nearOffers={nearOffers}
              isOfferDataLoading={isOfferDataLoading}
            />}
          />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
