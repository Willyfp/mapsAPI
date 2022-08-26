import {TextInputProps, TouchableOpacityProps} from 'react-native';
import {
  TextInputMaskOptionProp,
  TextInputMaskProps,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

export type StateType = {
  onMapReady: boolean;
};

export type IStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type IModal = 'success' | 'error' | 'confirm' | '';

export type ITypeButon = 'transparentWithBorder' | 'cancel' | 'submit';

export type CoordinateType = {
  latitude: number;
  longitude: number;
};

export type ButtonProps = TouchableOpacityProps & {
  color?: string;
  type: ITypeButon;
};

export type InputProps = (TextInputProps | TextInputMaskProps) & {
  masked?: boolean;
  error?: string;
};

export type DirectionsResult = {
  distance: number;
  duration: number;
  coordinates: [];
  fare: object;
  waypointOrder: [[]];
};

export type FieldValuesComsumption = {
  comsumption: string;
  fuelValue: string;
};

export type MASKSERVICE = {
  type: TextInputMaskTypeProp;
  value: string;
  options?: TextInputMaskOptionProp;
};
