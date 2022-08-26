import {createActions} from 'reduxsauce';
import {
  CurrentLocationActionCreators,
  CurrentLocationActionTypes,
} from './types';

export const {Types, Creators} = createActions<
  CurrentLocationActionTypes,
  CurrentLocationActionCreators
>({
  setCurrentLocationRequest: null,
  setCurrentLocationSuccess: ['data'],
  setCurrentLocationFailed: null,
});
