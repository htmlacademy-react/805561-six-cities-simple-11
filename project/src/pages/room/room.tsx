import Offers from '../../components/offers/offers';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Header from '../../components/header/header';
import {MAX_IMAGES_COUNT_IN_OFFER, MAX_NEAR_OFFERS} from '../../const';
import {convertRating} from '../../util';
import cn from 'classnames';
import React, {useEffect} from 'react';
import NotFound from '../not-found/not-found';
import {fetchNearOffersAction, fetchOfferAction, fetchReviewsAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {loadOffer, loadReviews} from '../../store/action';


const Room = (): JSX.Element => {

  const {currentOffer, currentOfferId, nearOffers, isOfferDataLoading} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentOfferId) {
      dispatch(fetchOfferAction(currentOfferId));
      dispatch(fetchReviewsAction(currentOfferId));
      dispatch(fetchNearOffersAction(currentOfferId));
    }
    return () => {
      dispatch(loadOffer(undefined));
      dispatch(loadReviews([]));
    };
  }, [currentOfferId]);

  if (!currentOffer && isOfferDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return !currentOffer ? <NotFound/> : (
    <>
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.slice(0, MAX_IMAGES_COUNT_IN_OFFER).map((image) => (
                <div key ={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={convertRating(currentOffer.rating)}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} {currentOffer.bedrooms > 1 ? ' Bedrooms' : ' Bedroom' }
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} {currentOffer.maxAdults > 1 ? ' adults' : ' adult' }
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={cn('property__avatar-wrapper', 'user__avatar-wrapper', {'property__avatar-wrapper--pro': currentOffer.host.isPro} )}>
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <Reviews />
            </div>
          </div>
          <Map
            selectedCity={currentOffer.location}
            currentOfferLocation={currentOffer.location}
            points={nearOffers.slice(0, MAX_NEAR_OFFERS)}
            main={false}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <Offers
              offers={nearOffers.slice(0, MAX_NEAR_OFFERS)}
              main={false}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default Room;
