import {AnyAction} from 'redux';
import {CoordinateType} from '../../../../../types';

export type CurrentLocationActionTypes = {
  SET_CURRENT_LOCATION_REQUEST: string;
  SET_CURRENT_LOCATION_SUCCESS: string;
  SET_CURRENT_LOCATION_FAILED: string;
};

export type CurrentLocationActionCreators = {
  setCurrentLocationRequest(): AnyAction;
  setCurrentLocationSuccess(
    data: CoordinateType & {initialAddress: string},
  ): AnyAction;
  setCurrentLocationFailed(): AnyAction;
};
