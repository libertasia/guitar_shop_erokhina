import {createSelector} from 'reselect';
import {NameSpace} from './root-reducer';

export const getIsAddToCartPopupVisibleStatus = (state) => state[NameSpace.VIEW].isAddToCartPopupOpened;
export const getIsDeleteFromCartPopupVisibleStatus = (state) => state[NameSpace.VIEW].isDeleteFromCartPopupOpened;
export const getIsSuccessPopupVisibleStatus = (state) => state[NameSpace.VIEW].isSuccessPopupOpened;

export const getAllGuitars = (state) => state[NameSpace.DATA].guitars;
export const getActiveProductId = (state) => state[NameSpace.DATA].activeProductId;

export const getGuitarsInCart = createSelector(
    [getAllGuitars],
    (guitars) => {
      return guitars.filter((guitar) => guitar.isInCart);
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
