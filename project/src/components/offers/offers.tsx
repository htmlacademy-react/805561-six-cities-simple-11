import cn from 'classnames';
import {TOffer} from '../../types/types';
import Offer from '../offer/offer';

type OffersProps = {
  offers:TOffer[];
  onListOfferHover?: (listOfferId:number) => void;
  main: boolean;
}


const Offers = ({offers, onListOfferHover, main}: OffersProps): JSX.Element => {

  const className = cn(
    'places__list',
    {'cities__places-list': main,
      'tabs__content': main,
      'near-places__list': !main,
    }
  );

  const mouseOverHandler = (id:number): void => {
    if(onListOfferHover){
      onListOfferHover(id);
    }
  };

  return (
    <div className={className}>
      {offers.map((offer: TOffer) =>
        (
          <Offer
            mouseOverHandler={mouseOverHandler}
            key={offer.id}
            offer={offer}
            main={main}
          />
        ))}
    </div>
  );
};

export default Offers;
