export const ActionType = {
  SET_IS_ADD_TO_CART_POPUP_OPENED: `view/setIsAddToCartPopupOpened`,
  SET_IS_DELETE_FROM_CART_POPUP_OPENED: `view/setIsDeleteFromCartPopupOpened`,
  SET_IS_SUCCESS_POPUP_OPENED: `view/setIsSuccessPopupOpened`,
  SET_ACTIVE_PRODUCT: `data/setActiveProduct`,
  DELETE_FROM_CART: `data/deleteFromCart`,
  ADD_ONE_TO_CART: `data/addOneToCart`,
  REMOVE_ONE_FROM_CART: `data/removeOneFromCart`,
  CHANGE_PRODUCT_COUNT: `data/changeProductCount`,
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
  deleteFromCart: (guitarId) => ({
    type: ActionType.DELETE_FROM_CART,
    payload: guitarId
  }),
  addOneToCart: (guitarId) => ({
    type: ActionType.ADD_ONE_TO_CART,
    payload: guitarId
  }),
  removeOneFromCart: (guitarId) => ({
    type: ActionType.REMOVE_ONE_FROM_CART,
    payload: guitarId
  }),
  changeProductCount: (guitarId, count) => ({
    type: ActionType.CHANGE_PRODUCT_COUNT,
    payload: {guitarId, count}
  }),
};
