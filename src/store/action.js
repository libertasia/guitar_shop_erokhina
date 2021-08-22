export const ActionType = {
  SET_IS_ADD_TO_CART_POPUP_OPENED: `view/setIsAddToCartPopupOpened`,
  SET_IS_DELETE_FROM_CART_POPUP_OPENED: `view/setIsDeleteFromCartPopupOpened`,
  SET_IS_SUCCESS_POPUP_OPENED: `view/setIsSuccessPopupOpened`,
  CHANGE_SORTING_TYPE: `view/changeSortingType`,
  CHANGE_SORTING_ORDER: `view/changeSortingOrder`,
  SET_ACTIVE_PRODUCT: `data/setActiveProduct`,
  DELETE_FROM_CART: `data/deleteFromCart`,
  ADD_ONE_TO_CART: `data/addOneToCart`,
  REMOVE_ONE_FROM_CART: `data/removeOneFromCart`,
  CHANGE_PRODUCT_COUNT: `data/changeProductCount`,
  FILTER_SET_MIN_PRICE: `filter/setMinPrice`,
  FILTER_SET_MAX_PRICE: `filter/setMaxPrice`,
  FILTER_ADD_STRINGS: `filter/addStrings`,
  FILTER_REMOVE_STRINGS: `filter/removeStrings`,
  FILTER_SET_TYPE_SELECTION: `filter/setTypeSelection`,
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
  changeSortingType: (type) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: type,
  }),
  changeSortingOrder: (order) => ({
    type: ActionType.CHANGE_SORTING_ORDER,
    payload: order,
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
  filterSetMinPrice: (price) => ({
    type: ActionType.FILTER_SET_MIN_PRICE,
    payload: price
  }),
  filterSetMaxPrice: (price) => ({
    type: ActionType.FILTER_SET_MAX_PRICE,
    payload: price
  }),
  filterAddStrings: (stringsCount) => ({
    type: ActionType.FILTER_ADD_STRINGS,
    payload: stringsCount
  }),
  filterRemoveStrings: (stringsCount) => ({
    type: ActionType.FILTER_REMOVE_STRINGS,
    payload: stringsCount
  }),
  filterSetTypeSelection: (typeName, isSelected) => ({
    type: ActionType.FILTER_SET_TYPE_SELECTION,
    payload: {
      name: typeName,
      isSelected
    }
  }),
};
