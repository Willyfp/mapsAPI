/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store;
