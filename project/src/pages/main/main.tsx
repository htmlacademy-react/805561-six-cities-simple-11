import React, {useState} from 'react';

import {TCity} from '../../types/types';
import Offers from '../../components/offers/offers';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import {useAppSelector} from '../../hooks';


type MainProps = {
  city: TCity;
  cities: string[];
}

function Main({city, cities}: MainProps): JSX.Element {
  const selectedOffers = useAppSelector((state) => state.offerList);
  const selectedCity = useAppSelector((state) => state.city);

  const [selectedPoint, setSelectedPoint] = useState('');

  const onListOfferHover = (listOfferId:string) :void =>{
    const currentPointId = listOfferId;
    setSelectedPoint(currentPointId);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={cities}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} places to stay in {selectedCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <Offers
                offers={selectedOffers}
                onListOfferHover={onListOfferHover}
                main
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
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
