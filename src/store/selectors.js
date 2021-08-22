import {createSelector} from 'reselect';
import {NameSpace} from './root-reducer';
import {generateSortedGuitars, generateFilteredGuitars} from '../utils';

export const getIsAddToCartPopupVisibleStatus = (state) => state[NameSpace.VIEW].isAddToCartPopupOpened;
export const getIsDeleteFromCartPopupVisibleStatus = (state) => state[NameSpace.VIEW].isDeleteFromCartPopupOpened;
export const getIsSuccessPopupVisibleStatus = (state) => state[NameSpace.VIEW].isSuccessPopupOpened;
export const getSortingType = (state) => state[NameSpace.VIEW].sortingType;
export const getSortingOrder = (state) => state[NameSpace.VIEW].sortingOrder;


export const getAllGuitars = (state) => state[NameSpace.DATA].guitars;
export const getActiveProductId = (state) => state[NameSpace.DATA].activeProductId;

export const getFilterMinPrice = (state) => state[NameSpace.FILTER].priceFrom;
export const getFilterMaxPrice = (state) => state[NameSpace.FILTER].priceTo;
export const getFilterSelectedStrings = (state) => state[NameSpace.FILTER].selectedStrings;
export const getFilterGuitarTypes = (state) => state[NameSpace.FILTER].guitarTypes;

export const getGuitarsInCart = createSelector(
    [getAllGuitars],
    (guitars) => {
      return guitars.filter((guitar) => guitar.numInCart > 0);
    }
);

export const getActiveGuitar = createSelector(
    [getAllGuitars, getActiveProductId],
    (guitars, activeProductId) => {
      const filtered = guitars.filter((guitar) => guitar.article === activeProductId);
      if (filtered.length > 0) {
        return filtered[0];
      }
      return null;
    }
);

export const getFilteredGuitars = createSelector(
    [getAllGuitars, getFilterMinPrice, getFilterMaxPrice, getFilterSelectedStrings, getFilterGuitarTypes],
    (guitars, minPrice, maxPrice, selectedStrings, typeFilters) => {
      return generateFilteredGuitars(guitars, minPrice, maxPrice, selectedStrings, typeFilters);
    }
);

export const getVisibleGuitars = createSelector(
    [getFilteredGuitars, getSortingType, getSortingOrder],
    (guitars, type, order) => {
      return generateSortedGuitars(guitars, type, order);
    }
);
