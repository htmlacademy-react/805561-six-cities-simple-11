import {useState} from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';
import {Offer} from '../../types/types';

type OffersProps = {
  offers:Offer[];
}


const Offers = ({offers}: OffersProps): JSX.Element =>{

  const [activCard, setActivCard] = useState(' ');//вот тут строку пустую передать это нормально?

  return(
    <>
      {offers.map((offer: Offer) =>{
        //тут нужно аыделить отдельный компонент карточки или можно так оставить?

        //почему-то отрабатывает с отставанием на один шаг
        //если впервые кликнуть на карточку - показывает при выводе в консоль, что в состоянии пустая строка,
        // затем при клике на следующую карточку - показывает айдишник предыдущей и так далее
        // - где у меня ошибка, кроме как в ДНК?
        const mouseOverHandler = () => {
          setActivCard(offer.id);
          // eslint-disable-next-line no-console
          console.log(activCard);
        };
        return(
          <article key={offer.id} className="cities__card place-card" onClick={mouseOverHandler}>{/*сделала по калику, так пока удобнее мне*/}
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
      })};
    </>
  );
};

export default Offers;
