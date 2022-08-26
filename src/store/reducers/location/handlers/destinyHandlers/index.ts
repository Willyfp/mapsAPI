import {Action} from 'redux';
import {CoordinateType} from 'types';
import {INITIAL_STATE_LOCATION} from '../../reducer';

type DestinyActionType = Action & {
  data: CoordinateType & {
    destinyAddress: string;
  };
};

export const setDestiny = (
  state = INITIAL_STATE_LOCATION,
  {data}: DestinyActionType,
) =>
  state.merge({
    destiny: {
      coords: {latitude: data.latitude, longitude: data.longitude},
      destinyAddress: data.destinyAddress,
    },
  });

export const removeDestiny = (state = INITIAL_STATE_LOCATION) =>
  state.merge({
    destiny: undefined,
  });
