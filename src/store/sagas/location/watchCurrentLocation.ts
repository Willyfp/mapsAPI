import {GeolocationResponse} from '@react-native-community/geolocation';
import {put, takeLatest} from '@redux-saga/core/effects';
import {getAdress, getCurrencyLocation} from '../../../utils/location';
import {
  CurrentLocationCreators,
  CurrentLocationTypes,
} from '../../reducers/location';

function* setCurrentLocationRequest() {
  try {
    const position: GeolocationResponse = yield getCurrencyLocation();

    const initialAddress: string = yield getAdress(
      position.coords.latitude,
      position.coords.longitude,
    );

    yield put(
      CurrentLocationCreators.setCurrentLocationSuccess({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        initialAddress,
      }),
    );
  } catch (error) {
    yield put(CurrentLocationCreators.setCurrentLocationFailed());
  }
}

export default function* watch() {
  yield takeLatest(
    CurrentLocationTypes.SET_CURRENT_LOCATION_REQUEST,
    setCurrentLocationRequest,
  );
}
