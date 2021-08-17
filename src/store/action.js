export const ActionType = {
  SET_IS_ADD_TO_CART_POPUP_OPENED: `view/setIsAddToCartPopupOpened`,
  SET_IS_DELETE_FROM_CART_POPUP_OPENED: `view/setIsDeleteFromCartPopupOpened`,
  SET_IS_SUCCESS_POPUP_OPENED: `view/setIsSuccessPopupOpened`,
};

export const ActionCreator = {
  setIsAddToCartPopupOpened: (isVisible) => ({
    type: ActionType.SET_IS_ADD_TO_CART_POPUP_OPENED,
    payload: isVisible,
  }),
  setIsDeleteFromCartPopupOpened: (isVisible) => ({
    type: ActionType.SET_IS_DELETE_FROM_CART_POPUP_OPENED,
    payload: isVisible,
  }),
  setIsSuccessPopupOpened: (isVisible) => ({
    type: ActionType.SET_IS_SUCCESS_POPUP_OPENED,
    payload: isVisible,
  }),
};
