import {all, fork} from 'redux-saga/effects';
import locationSagas from './location';

function* sagas() {
  yield all([fork(locationSagas)]);
}

export default sagas;
