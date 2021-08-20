import {combineReducers} from 'redux';
import {viewReducer} from './view-reducer';
import {dataReducer} from './data-reducer';

export const NameSpace = {
  DATA: `DATA`,
  VIEW: `VIEW`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.VIEW]: viewReducer,
});
