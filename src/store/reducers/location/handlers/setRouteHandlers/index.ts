import {Action} from 'redux';
import {INITIAL_STATE_LOCATION} from '../../reducer';
import {RouteInfo} from '../../types';

type SetRouteActionType = Action & {
  data: RouteInfo;
};

export const setRoute = (
  state = INITIAL_STATE_LOCATION,
  {data}: SetRouteActionType,
) =>
  state.merge({
    route: {
      ...state.route,
      distance: data.distance,
      time: data.time,
    },
  });
