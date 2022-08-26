import {all, fork} from 'redux-saga/effects';

import setCurrentLocationRequest from './watchCurrentLocation';

import calculateComsumptionRequest from './watchCalculateComsumption';

import listHistoryRequest from './watchListHistory';

function* locationSagas() {
  yield all([
    fork(setCurrentLocationRequest),
    fork(calculateComsumptionRequest),
    fork(listHistoryRequest),
  ]);
}

export default locationSagas;
