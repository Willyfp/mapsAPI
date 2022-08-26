import {AnyAction} from 'redux';
import {ItemHistory} from '../../types';

export type ListHistoryActionTypes = {
  LIST_HISTORY_REQUEST: string;
  LIST_HISTORY_SUCCESS: string;
  LIST_HISTORY_FAILED: string;
};

export type ListHistoryActionCreators = {
  listHistoryRequest(): AnyAction;
  listHistorySuccess(data: ItemHistory[]): AnyAction;
  listHistoryFailed(): AnyAction;
};
