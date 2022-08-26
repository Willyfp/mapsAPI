import {createActions} from 'reduxsauce';
import {ComsumptionActionCreators, ComsumptionActionTypes} from './types';

export const {Types, Creators} = createActions<
  ComsumptionActionTypes,
  ComsumptionActionCreators
>({
  calculateComsumptionRequest: ['data'],
  calculateComsumptionSuccess: ['data'],
  calculateComsumptionFailed: null,
});
