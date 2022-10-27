import Main from '../../pages/main/main';
import {Offer} from '../../types/types';

type AppScreenProps = {
  offersCount: number;
  offers: Offer[];
}

const App = ({offers, offersCount}:AppScreenProps): JSX.Element => (
  <Main offers={offers} offersCount={offersCount} />
);

export default App;
