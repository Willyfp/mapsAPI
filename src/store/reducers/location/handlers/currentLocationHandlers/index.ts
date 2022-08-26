import {Action} from 'redux';
import {CoordinateType} from 'types';
import {INITIAL_STATE_LOCATION} from '../../reducer';

type CurrentLocationActionType = Action & {
  data: CoordinateType & {
    initialAddress: string;
  };
};

export const setCurrentLocationRequest = (state = INITIAL_STATE_LOCATION) =>
  state.setIn(['currentLocation', 'status'], 'loading');

export const setCurrentLocationSuccess = (
  state = INITIAL_STATE_LOCATION,
  {data}: CurrentLocationActionType,
) =>
  state.merge({
    currentLocation: {
      status: 'succeeded',
      coords: {latitude: data.latitude, longitude: data.longitude},
      initialAddress: data.initialAddress,
    },
  });

export const setCurrentLocationFailed = (state = INITIAL_STATE_LOCATION) =>
  state.setIn(['currentLocation', 'status'], 'failed');
