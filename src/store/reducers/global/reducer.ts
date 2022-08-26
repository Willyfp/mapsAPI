import {createReducer} from 'reduxsauce';
import Immutable, {ImmutableObject} from 'seamless-immutable';
import {InitialStateGlobal} from './types';
import {Types as ModalTypes} from './actions/modalActions';
import {setModal} from './handlers/modalHandlers';

export const INITIAL_STATE_GLOBAL: ImmutableObject<InitialStateGlobal> =
  Immutable({
    modal: {visible: false},
  });

export default createReducer(INITIAL_STATE_GLOBAL, {
  [ModalTypes.SET_MODAL]: setModal,
});
