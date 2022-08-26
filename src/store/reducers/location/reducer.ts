import {createReducer} from 'reduxsauce';
import Immutable, {ImmutableObject} from 'seamless-immutable';
import {InitialStateLocation} from './types';

import {Types as CurrentLocationTypes} from './actions/currentLocationActions';
import {
  setCurrentLocationFailed,
  setCurrentLocationRequest,
  setCurrentLocationSuccess,
} from './handlers/currentLocationHandlers';

import {Types as DestinyTypes} from './actions/destinyActions';
import {removeDestiny, setDestiny} from './handlers/destinyHandlers';

import {Types as ComsumptionTypes} from './actions/comsumptionActions';
import {
  calculateComsumptionFailed,
  calculateComsumptionRequest,
  calculateComsumptionSuccess,
} from './handlers/comsumptionHandlers';

import {Types as RouteTypes} from './actions/routeActions';
import {setRoute} from './handlers/setRouteHandlers';

import {Types as ListHistoryTypes} from './actions/listHistoryActions';
import {
  listHistoryFailed,
  listHistoryRequest,
  listHistorySuccess,
} from './handlers/listHistoryHandlers';

export const INITIAL_STATE_LOCATION: ImmutableObject<InitialStateLocation> =
  Immutable({
    currentLocation: {
      status: 'idle',
      coords: {
        latitude: 0,
        longitude: 0,
      },
      initialAddress: '',
    },
    route: {
      status: 'idle',
      comsumption: 'R$0,00',
      distance: 0,
      time: {
        hours: 0,
        minutes: 0,
      },
    },
    history: {
      status: 'idle',
      list: [],
    },
  });

export default createReducer(INITIAL_STATE_LOCATION, {
  [CurrentLocationTypes.SET_CURRENT_LOCATION_REQUEST]:
    setCurrentLocationRequest,
  [CurrentLocationTypes.SET_CURRENT_LOCATION_SUCCESS]:
    setCurrentLocationSuccess,
  [CurrentLocationTypes.SET_CURRENT_LOCATION_FAILED]: setCurrentLocationFailed,

  [DestinyTypes.SET_DESTINY]: setDestiny,
  [DestinyTypes.REMOVE_DESTINY]: removeDestiny,

  [ComsumptionTypes.CALCULATE_COMSUMPTION_REQUEST]: calculateComsumptionRequest,
  [ComsumptionTypes.CALCULATE_COMSUMPTION_SUCCESS]: calculateComsumptionSuccess,
  [ComsumptionTypes.CALCULATE_COMSUMPTION_FAILED]: calculateComsumptionFailed,

  [RouteTypes.SET_ROUTE]: setRoute,

  [ListHistoryTypes.LIST_HISTORY_REQUEST]: listHistoryRequest,
  [ListHistoryTypes.LIST_HISTORY_SUCCESS]: listHistorySuccess,
  [ListHistoryTypes.LIST_HISTORY_FAILED]: listHistoryFailed,
});
