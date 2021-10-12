import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import fetchReducer from './elements/fetchReducer';
import inspectReducer from './elements/inspectReducer';

const combineMiddleware = [logger, thunk];

const reducer = combineReducers(
  {
    periodicTable: fetchReducer,
    inspect: inspectReducer,
  },
);

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
