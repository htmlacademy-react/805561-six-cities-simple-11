import cn from 'classnames';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectionFilter, sortByFilter} from '../../store/action';


type SortProps = {
  filters:string[];
}

const Filter = ({filters}: SortProps): JSX.Element => {
  const {currentFilter} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {filters.map((item) => {
          const isActive = item === currentFilter;
          return (
            <li
              key={item}
              className={cn('places__option', {'places__option--active':isActive})}
              tabIndex={0}
              onClick={() =>{
                dispatch(selectionFilter(item));
                dispatch(sortByFilter());
              }}
            >
              {item}
            </li>
          );
        }
        )}
      </ul>
    </form>
  );
};
export default Filter;
