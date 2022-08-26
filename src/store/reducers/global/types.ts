import {ReactNode} from 'react';
import {IModal} from '../../../types';

export type ModalType = {
  visible: boolean;
  type?: IModal;
  title?: string;
  message?: string;
  child?: ReactNode;
};

export type InitialStateGlobal = {
  modal: ModalType;
};
