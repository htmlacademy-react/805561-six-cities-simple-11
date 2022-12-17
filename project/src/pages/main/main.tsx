import React, {useState} from 'react';

import Offers from '../../components/offers/offers';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import {useAppSelector} from '../../hooks';
import Filter from '../../components/sort/sort';
import MainEmpty from '../main-empty/main-empty';
import {CITY} from '../../const';


type MainProps = {
  filters: string[];
}

function Main({filters}: MainProps): JSX.Element {
  const selectedOffers = useAppSelector((state) => state.offerListSortedByCity);
  const selectedCity = useAppSelector((state) => state.city);
  const [selectedPoint, setSelectedPoint] = useState(0);

  const onListOfferHover = (listOfferId:number) :void =>{
    setSelectedPoint(listOfferId);
  };

  if (selectedOffers.length === 0) {
    return <MainEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} places to stay in {selectedCity}</b>
              <Filter filters={filters} />.
              <Offers
                offers={selectedOffers}
                onListOfferHover={onListOfferHover}
                main
              />
            </section>
            <div className="cities__right-section">
              <Map
                selectedCity={CITY[selectedCity]}
                points={selectedOffers}
                selectedPoint={selectedPoint}
                main
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
