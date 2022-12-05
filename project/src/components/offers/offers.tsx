import {OfferType} from '../../types/types';
import Offer from '../offer/offer';

type OffersProps = {
  offers:OfferType[];
  onListOfferHover: (listOfferId:string) => void;
}

const Offers = ({offers, onListOfferHover}: OffersProps): JSX.Element => {

  const mouseOverHandler = (offer:OfferType): void => {
    onListOfferHover(offer.id);
  };

  return (
    <>
      {offers.map((offer: OfferType) =>
        (
          <Offer
            mouseOverHandler={mouseOverHandler}
            key={offer.id}
            offer={offer}
          />
        ))}
    </>
  );
};

export default Offers;
