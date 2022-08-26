import {AnyAction} from 'redux';
import {ModalType} from '../../types';

export type ModalActionTypes = {
  SET_MODAL: string;
};

export type ModalActionCreators = {
  setModal(data: ModalType): AnyAction;
};
