import Main from '../../pages/main/main';
import Header from '../../components/header/header';
import {Offer} from '../../types/types';


type AppScreenProps = {
  offersCount: number;
  offers: Offer[];
}

function App({offers, offersCount}:AppScreenProps): JSX.Element {
  return (
    <>
      <Main offers={offers} offersCount={offersCount} />
    </>
  );
}

export default App;
