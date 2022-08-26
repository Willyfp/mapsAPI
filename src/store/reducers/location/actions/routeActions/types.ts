import {AnyAction} from 'redux';
import {RouteInfo} from '../../types';

export type SetRouteActionTypes = {
  SET_ROUTE: string;
};

export type SetRouteActionCreators = {
  setRoute(data: RouteInfo): AnyAction;
};
