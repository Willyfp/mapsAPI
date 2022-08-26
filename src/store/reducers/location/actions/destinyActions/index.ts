import {createActions} from 'reduxsauce';
import {DestinyActionCreators, DestinyActionTypes} from './types';

export const {Types, Creators} = createActions<
  DestinyActionTypes,
  DestinyActionCreators
>({
  setDestiny: ['data'],
  removeDestiny: null,
});
