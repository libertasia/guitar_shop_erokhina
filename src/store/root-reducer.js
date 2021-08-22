import {combineReducers} from 'redux';
import {viewReducer} from './view-reducer';
import {dataReducer} from './data-reducer';
import {filterReducer} from './filter-reducer';

export const NameSpace = {
  DATA: `DATA`,
  VIEW: `VIEW`,
  FILTER: `FILTER`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.VIEW]: viewReducer,
  [NameSpace.FILTER]: filterReducer,
});
