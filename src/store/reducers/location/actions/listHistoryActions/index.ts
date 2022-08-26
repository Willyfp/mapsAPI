import {createActions} from 'reduxsauce';
import {ListHistoryActionCreators, ListHistoryActionTypes} from './types';

export const {Types, Creators} = createActions<
  ListHistoryActionTypes,
  ListHistoryActionCreators
>({
  listHistoryRequest: null,
  listHistorySuccess: ['data'],
  listHistoryFailed: null,
});
