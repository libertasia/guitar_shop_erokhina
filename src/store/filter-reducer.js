import {ActionType} from './action';
import {getSelectableStrings, getSelectableTypeNames} from '../utils';
import {GuitarType} from '../const';

const initialState = {
  priceFrom: -1,
  priceTo: -1,
  selectedStrings: [],
  guitarTypes: [
    {
      name: GuitarType.ACOUSTIC,
      caption: `Акустические гитары`,
      isSelected: false,
      availableStrings: [6, 7, 12],
    },
    {
      name: GuitarType.ELECTRIC,
      caption: `Электрогитары`,
      isSelected: false,
      availableStrings: [4, 6, 7],
    },
    {
      name: GuitarType.UKULELE,
      caption: `Укулеле`,
      isSelected: false,
      availableStrings: [4],
    },
  ]
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_SET_MIN_PRICE:
      return {
        ...state,
        priceFrom: action.payload,
      };
    case ActionType.FILTER_SET_MAX_PRICE:
      return {
        ...state,
        priceTo: action.payload,
      };
    case ActionType.FILTER_ADD_STRINGS:
      const newSelectedStrings = [...state.selectedStrings, action.payload];
      let guitarTypes = [...state.guitarTypes];
      const selectableTypeNames = getSelectableTypeNames(guitarTypes, newSelectedStrings);
      guitarTypes.forEach((item) => {
        if (item.isSelected) {
          item.isSelected = selectableTypeNames.includes(item.name);
        }
      });
      return {
        ...state,
        guitarTypes,
        selectedStrings: newSelectedStrings,
      };
    case ActionType.FILTER_REMOVE_STRINGS:
      const updatedSelectedStrings = [...state.selectedStrings].filter((el) => el !== action.payload);
      let updatedGuitarTypes = [...state.guitarTypes];
      const updatedSelectableTypeNames = getSelectableTypeNames(updatedGuitarTypes, updatedSelectedStrings);
      updatedGuitarTypes.forEach((item) => {
        if (item.isSelected) {
          item.isSelected = updatedSelectableTypeNames.includes(item.name);
        }
      });
      return {
        ...state,
        guitarTypes: updatedGuitarTypes,
        selectedStrings: updatedSelectedStrings,
      };
    case ActionType.FILTER_SET_TYPE_SELECTION:
      const newGuitarTypes = [...state.guitarTypes];
      const index = newGuitarTypes.findIndex((item) => item.name === action.payload.name);
      const guitarType = {...newGuitarTypes[index]};
      guitarType.isSelected = action.payload.isSelected;
      newGuitarTypes[index] = guitarType;
      const selectableStrings = getSelectableStrings(newGuitarTypes);
      let selectedStrings = [...state.selectedStrings];
      selectedStrings = selectedStrings.filter((item) => selectableStrings.includes(item));
      return {
        ...state,
        guitarTypes: newGuitarTypes,
        selectedStrings,
      };
  }

  return state;
};

export {filterReducer};
