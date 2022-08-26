import {createActions} from 'reduxsauce';
import {ModalActionCreators, ModalActionTypes} from './types';

export const {Types, Creators} = createActions<
  ModalActionTypes,
  ModalActionCreators
>({
  setModal: ['data'],
});
