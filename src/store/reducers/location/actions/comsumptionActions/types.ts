import {AnyAction} from 'redux';
import {FieldValuesComsumption} from 'types';

export type ComsumptionActionTypes = {
  CALCULATE_COMSUMPTION_REQUEST: string;
  CALCULATE_COMSUMPTION_SUCCESS: string;
  CALCULATE_COMSUMPTION_FAILED: string;
};

export type ComsumptionActionCreators = {
  calculateComsumptionRequest(data: FieldValuesComsumption): AnyAction;
  calculateComsumptionSuccess(data: string): AnyAction;
  calculateComsumptionFailed(): AnyAction;
};
