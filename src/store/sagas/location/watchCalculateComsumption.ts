import {put, select, takeLatest} from '@redux-saga/core/effects';
import {Action} from 'redux';
import {RootState} from 'store/reducers';
import {ComsumptionCreators, ComsumptionTypes} from 'store/reducers/location';
import {FieldValuesComsumption} from 'types';
import {getState} from 'utils';
import {moneyOptions} from 'utils/constants';
import {formatMoney, getRawValue} from 'utils/formats';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CalculateComsumptionActionType = Action & {
  data: FieldValuesComsumption;
};

function* calculateComsumptionRequest({
  data: {comsumption, fuelValue},
}: CalculateComsumptionActionType) {
  try {
    const history: string = yield AsyncStorage.getItem('history');

    let newHistory = [];

    if (history) {
      newHistory = JSON.parse(history);
    }

    const {
      location: {
        route: {distance},
        currentLocation: {initialAddress},
        destiny,
      },
    }: RootState = yield select(getState);

    const destinyAddress = destiny?.destinyAddress;

    const rawValue = getRawValue({
      type: 'money',
      value: fuelValue,
      options: moneyOptions,
    });

    const comsumptionCalculated =
      typeof rawValue === 'number'
        ? (distance / Number(comsumption)) * rawValue
        : 0;

    yield put(
      ComsumptionCreators.calculateComsumptionSuccess(
        formatMoney(comsumptionCalculated),
      ),
    );

    newHistory.push({
      date: Date.now(),
      fuelValue,
      comsumption,
      total: comsumptionCalculated,
      distance,
      initialLocation: initialAddress,
      destiny: destinyAddress,
    });

    AsyncStorage.setItem('history', JSON.stringify(newHistory));
  } catch (error) {
    yield put(ComsumptionCreators.calculateComsumptionFailed());
  }
}

export default function* watch() {
  yield takeLatest(
    ComsumptionTypes.CALCULATE_COMSUMPTION_REQUEST,
    calculateComsumptionRequest,
  );
}
