import {useState} from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';
import {Offer} from '../../types/types';

type OffersProps = {
  offers:Offer[];
}

type FlatProps = {
  offer:Offer;
  mouseOverHandler: (offer: Offer)=> void;
}
//пока не вынесла в отдельный файл - для наглядности
const Flat = ({offer, mouseOverHandler}: FlatProps): JSX.Element =>(
  <article key={offer.id} className="cities__card place-card" onClick={() => mouseOverHandler(offer)} >
    {offer.mark && <div className="place-card__mark"><span>Premium</span></div> }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.image} width="260" height="200" alt={offer.alt}/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price} </b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: '80%'}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={AppRoute.Room}>{offer.name}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

const Offers = ({offers}: OffersProps): JSX.Element => {
  const [activCard, setActivCard] = useState(' ');
  const mouseOverHandler = (offer:Offer): void => {
    setActivCard(offer.id);
    // eslint-disable-next-line no-console
    console.log(activCard);
    // eslint-disable-next-line no-console
    console.log(offer);
  };

  return (
    <>
      {offers.map((offer: Offer) => <Flat mouseOverHandler={mouseOverHandler} key={offer.id} offer={offer}/>)}
    </>
  );
};

export default Offers;
