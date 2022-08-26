import {Action} from 'redux';
import {INITIAL_STATE_LOCATION} from '../../reducer';

type ComsumptionActionType = Action & {
  data: string;
};

export const calculateComsumptionRequest = (state = INITIAL_STATE_LOCATION) =>
  state.setIn(['route', 'status'], 'loading');

export const calculateComsumptionSuccess = (
  state = INITIAL_STATE_LOCATION,
  {data}: ComsumptionActionType,
) =>
  state.merge({
    route: {
      status: 'succeeded',
      comsumption: data,
    },
  });

export const calculateComsumptionFailed = (state = INITIAL_STATE_LOCATION) =>
  state.setIn(['route', 'status'], 'failed');
