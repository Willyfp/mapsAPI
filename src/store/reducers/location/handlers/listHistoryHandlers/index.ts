import {Action} from 'redux';
import {INITIAL_STATE_LOCATION} from '../../reducer';
import {ItemHistory} from '../../types';

type ListHistoryActionType = Action & {
  data: ItemHistory[];
};

export const listHistoryRequest = (state = INITIAL_STATE_LOCATION) =>
  state.setIn(['history', 'status'], 'loading');

export const listHistorySuccess = (
  state = INITIAL_STATE_LOCATION,
  {data}: ListHistoryActionType,
) =>
  state.merge({
    history: {
      status: 'succeeded',
      list: data,
    },
  });

export const listHistoryFailed = (state = INITIAL_STATE_LOCATION) =>
  state.setIn(['history', 'status'], 'failed');
