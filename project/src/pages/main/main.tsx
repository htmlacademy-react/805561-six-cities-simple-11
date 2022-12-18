import React, {useState} from 'react';

import {CITY} from '../../const';
import Offers from '../../components/offers/offers';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import {useAppSelector} from '../../hooks';
import Sort from '../../components/sort/sort';
import MainEmpty from '../main-empty/main-empty';


type MainProps = {
  filters: string[];
}

function Main({filters}: MainProps): JSX.Element {

  const {offerListSortedByCity, city, offerListSortedByFilter} = useAppSelector((state) => state);
  const [selectedPoint, setSelectedPoint] = useState(0);

  const onListOfferHover = (listOfferId:number) :void =>{
    setSelectedPoint(listOfferId);
  };

  if (offerListSortedByCity.length === 0) {
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
              <b className="places__found">{offerListSortedByCity.length} places to stay in {city}</b>
              <Sort filters={filters} />
              <Offers
                offers={offerListSortedByFilter}
                onListOfferHover={onListOfferHover}
                main
              />
            </section>
            <div className="cities__right-section">
              <Map
                selectedCity={CITY[city]}
                points={offerListSortedByCity}
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
