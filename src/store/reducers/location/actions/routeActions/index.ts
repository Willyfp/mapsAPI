import {createActions} from 'reduxsauce';
import {SetRouteActionCreators, SetRouteActionTypes} from './types';

export const {Types, Creators} = createActions<
  SetRouteActionTypes,
  SetRouteActionCreators
>({
  setRoute: ['data'],
});
