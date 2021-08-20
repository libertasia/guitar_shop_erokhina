export const ActionType = {
  SET_IS_ADD_TO_CART_POPUP_OPENED: `view/setIsAddToCartPopupOpened`,
  SET_IS_DELETE_FROM_CART_POPUP_OPENED: `view/setIsDeleteFromCartPopupOpened`,
  SET_IS_SUCCESS_POPUP_OPENED: `view/setIsSuccessPopupOpened`,
  SET_ACTIVE_PRODUCT: `data/setActiveProduct`,
  SET_IS_IN_CART_STATUS: `data/setIsInCartStatus`,
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
  setActiveProductId: (guitarId) => ({
    type: ActionType.SET_ACTIVE_PRODUCT,
    payload: guitarId
  }),
  setIsInCartStatus: (guitarId, isInCart) => ({
    type: ActionType.SET_IS_IN_CART_STATUS,
    payload: {guitarId, isInCart}
  }),
};
