import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import cn from 'classnames';
import {sortByCity, selectionCity, sortByFilter, selectionFilter} from '../../store/action';
import {CITIES, INITIAL_SORT} from '../../const';


const CityList = (): JSX.Element => {

  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const isActive = city === selectedCity;
            return(
              <li key={city} className="locations__item"
                onClick={() => {
                  dispatch(selectionCity(city));
                  dispatch(sortByCity());
                  dispatch(selectionFilter(INITIAL_SORT));
                  dispatch(sortByFilter());
                }}
              >
                <a className={cn('locations__item-link', 'tabs__item', {'tabs__item--active':isActive})} href="#">
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default CityList;
