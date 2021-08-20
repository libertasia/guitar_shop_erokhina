import {ActionType} from './action';
const mockGuitars = require(`../guitars.json`);

const initialState = {
  guitars: mockGuitars,
  activeProductId: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProductId: action.payload,
      };
    case ActionType.SET_IS_IN_CART_STATUS:
      const guitars = [...state.guitars];
      const index = guitars.findIndex((item) => item.article === action.payload.guitarId);
      const activeGuitar = {...guitars[index]};
      activeGuitar.isInCart = action.payload.isInCart;
      guitars[index] = activeGuitar;
      return {
        ...state,
        guitars,
      };
  }

  return state;
};

export {dataReducer};
