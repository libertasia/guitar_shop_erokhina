import {NameSpace} from './root-reducer';

export const getIsAddToCartPopupVisibleStatus = (state) => state[NameSpace.VIEW].isAddToCartPopupOpened;
export const getIsDeleteFromCartPopupVisibleStatus = (state) => state[NameSpace.VIEW].isDeleteFromCartPopupOpened;
export const getIsSuccessPopupVisibleStatus = (state) => state[NameSpace.VIEW].isSuccessPopupOpened;
