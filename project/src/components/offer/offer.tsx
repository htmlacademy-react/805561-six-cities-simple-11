import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

import {TOffer} from '../../types/types';

const convertRating = (rating:number) => {
  const widtth = `${Math.round(rating) * 20 }%`;
  return {width: widtth};
};

type OfferProps = {
  offer:TOffer;
  mouseOverHandler: (offer: number) => void;
  main: boolean;
}

const Offer = ({offer, mouseOverHandler, main}: OfferProps): JSX.Element =>{
  const className = main ? 'cities' : 'near-places';

  return(
    <article key={offer.id} className={`${className}__card place-card`} onMouseOver={() => mouseOverHandler(offer.id)} >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div> }
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title}/>
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
            <span style={convertRating(offer.rating)}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );};

export default Offer;
