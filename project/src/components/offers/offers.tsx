import cn from 'classnames';
import {TOffer} from '../../types/types';
import Offer from '../offer/offer';
import {useEffect} from 'react';
import { sortByCity, sortByFilter} from '../../store/action';
import {useAppDispatch} from '../../hooks';


type OffersProps = {
  offers:TOffer[];
  onListOfferHover?: (listOfferId:number) => void;
  main: boolean;
}

const Offers = ({offers, onListOfferHover, main}: OffersProps): JSX.Element => {

  const dispatch = useAppDispatch();
  const className = cn(
    'places__list',
    {'cities__places-list': main,
      'tabs__content': main,
      'near-places__list': !main,
    }
  );

  const onMouseOverHandler = (id:number): void => {
    if(onListOfferHover){
      onListOfferHover(id);
    }
  };

  useEffect(() => {
    dispatch(sortByCity());
    dispatch(sortByFilter());
  }, []);

  return (
    <div className={className}>
      {offers.map((offer: TOffer) =>
        (
          <Offer
            onMouseOverHandler={onMouseOverHandler}
            key={offer.id}
            offer={offer}
            main={main}
          />
        ))}
    </div>
  );
};

export default Offers;
