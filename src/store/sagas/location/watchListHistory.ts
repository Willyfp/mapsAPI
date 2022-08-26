import {put, takeLatest} from '@redux-saga/core/effects';
import {ListHistoryCreators, ListHistoryTypes} from 'store/reducers/location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {formatMoney} from 'utils/formats';
import {ItemHistory} from 'store/reducers/location/types';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

function* listHistoryRequest() {
  try {
    const value: string = yield AsyncStorage.getItem('history');

    let history = [];

    if (value) {
      history = JSON.parse(value);
    }

    history = history.map((item: ItemHistory) => {
      const formatedDate = new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(item.date);

      return {
        ...item,
        id: Date.now(),
        textPlaceholder: [
          {
            placeholder: 'Data:',
            value: formatedDate,
          },
          {
            placeholder: 'De:',
            value: item.initialLocation,
          },
          {
            placeholder: 'Para:',
            value: item.destiny,
          },
          {
            placeholder: 'Distância:',
            value: item.distance,
          },
          {
            placeholder: 'Valor do combustível:',
            value: item.fuelValue,
          },
          {
            placeholder: 'Consumo:',
            value: `${item.comsumption} km/l`,
          },
          {
            placeholder: 'Total:',
            value: formatMoney(item.total),
          },
        ],
      };
    });

    yield put(ListHistoryCreators.listHistorySuccess(history));
  } catch (error) {
    yield put(ListHistoryCreators.listHistoryFailed());
  }
}

export default function* watch() {
  yield takeLatest(ListHistoryTypes.LIST_HISTORY_REQUEST, listHistoryRequest);
}
