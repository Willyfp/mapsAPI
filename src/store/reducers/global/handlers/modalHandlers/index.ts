import {Action} from 'redux';
import {INITIAL_STATE_GLOBAL} from '../../reducer';
import {ModalType} from '../../types';

type ModalActionType = Action & {
  data: ModalType;
};

export const setModal = (
  state = INITIAL_STATE_GLOBAL,
  {data}: ModalActionType,
) => state.setIn(['modal'], data);
