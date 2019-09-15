import { combineReducers } from 'redux';
import map from './map';
import mainIndicators from './mainIndicators';

export const rootReducer = combineReducers({ map, mainIndicators });
