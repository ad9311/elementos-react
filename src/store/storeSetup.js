import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import loadReducer from './elements/loadReducer';
import inspectReducer from './elements/inspectReducer';
import arrangeReducer from './elements/arrangeReducer';

const combineMiddleware = [thunk];

const reducer = combineReducers(
  {
    periodicTable: loadReducer,
    inspect: inspectReducer,
    arrange: arrangeReducer,
  },
);

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
