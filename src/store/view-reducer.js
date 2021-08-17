import {ActionType} from './action';

const initialState = {
  isAddToCartPopupOpened: false,
  isDeleteFromCartPopupOpened: false,
  isSuccessPopupOpened: false,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IS_ADD_TO_CART_POPUP_OPENED:
      return {
        ...state,
        isAddToCartPopupOpened: action.payload,
      };
    case ActionType.SET_IS_DELETE_FROM_CART_POPUP_OPENED:
      return {
        ...state,
        isDeleteFromCartPopupOpened: action.payload,
      };
    case ActionType.SET_IS_SUCCESS_POPUP_OPENED:
      return {
        ...state,
        isSuccessPopupOpened: action.payload,
      };
  }

  return state;
};

export {viewReducer};
