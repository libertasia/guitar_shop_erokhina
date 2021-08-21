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
    case ActionType.DELETE_FROM_CART:
      const guitarsForDelete = [...state.guitars];
      const indexToDelete = guitarsForDelete.findIndex((item) => item.article === action.payload);
      const deleteGuitar = {...guitarsForDelete[indexToDelete]};
      deleteGuitar.numInCart = 0;
      guitarsForDelete[indexToDelete] = deleteGuitar;
      return {
        ...state,
        guitars: guitarsForDelete,
      };
    case ActionType.ADD_ONE_TO_CART:
      const guitarsForAdd = [...state.guitars];
      const indexToAdd = guitarsForAdd.findIndex((item) => item.article === action.payload);
      const addGuitar = {...guitarsForAdd[indexToAdd]};
      addGuitar.numInCart += 1;
      guitarsForAdd[indexToAdd] = addGuitar;
      return {
        ...state,
        guitars: guitarsForAdd,
      };
    case ActionType.REMOVE_ONE_FROM_CART:
      const guitarsForRemove = [...state.guitars];
      const indexToRemove = guitarsForRemove.findIndex((item) => item.article === action.payload);
      const removeGuitar = {...guitarsForRemove[indexToRemove]};
      removeGuitar.numInCart -= 1;
      if (removeGuitar.numInCart < 0) {
        removeGuitar.numInCart = 0;
      }
      guitarsForRemove[indexToRemove] = removeGuitar;
      return {
        ...state,
        guitars: guitarsForRemove,
      };
    case ActionType.CHANGE_PRODUCT_COUNT:
      const guitarsForChange = [...state.guitars];
      const indexToChange = guitarsForChange.findIndex((item) => item.article === action.payload.guitarId);
      const changeGuitar = {...guitarsForChange[indexToChange]};
      changeGuitar.numInCart = action.payload.count;
      guitarsForChange[indexToChange] = changeGuitar;
      return {
        ...state,
        guitars: guitarsForChange,
      };
  }

  return state;
};

export {dataReducer};
