import {TOffer} from '../../types/types';
import Offer from '../offer/offer';

type OffersProps = {
  offers:TOffer[];
  onListOfferHover: (listOfferId:string) => void;
}

const Offers = ({offers, onListOfferHover}: OffersProps): JSX.Element => {

  const mouseOverHandler = (offer:TOffer): void => {
    onListOfferHover(offer.id);
  };

  return (
    <>
      {offers.map((offer: TOffer) =>
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
