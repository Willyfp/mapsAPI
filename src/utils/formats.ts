import {MaskService} from 'react-native-masked-text';
import {MASKSERVICE} from 'types';
import {moneyOptions} from './constants';

export const getRawValue = ({
  type,
  value,
  options,
}: MASKSERVICE): string | number => {
  return MaskService.toRawValue(type, value, options);
};

export const formatMoney = (value: number) => {
  return MaskService.toMask('money', value as unknown as string, moneyOptions);
};
