import {AnyAction} from 'redux';
import {CoordinateType} from '../../../../../types';

export type DestinyActionTypes = {
  SET_DESTINY: string;
  REMOVE_DESTINY: string;
};

export type DestinyActionCreators = {
  setDestiny(
    data: (CoordinateType & {destinyAddress: string | Response}) | undefined,
  ): AnyAction;
  removeDestiny(): AnyAction;
};
