import {CoordinateType, IStatus} from '../../../types';

export type ItemHistory = {
  id: number;
  date: number;
  initialLocation: string;
  destiny: string;
  distance: number;
  fuelValue: string;
  comsumption: number;
  total: number;
  textPlaceholder: [
    {
      placeholder: string;
      value: string | number;
    },
  ];
};

export type RouteInfo = {
  distance: number;
  time: {
    hours: number;
    minutes: number;
  };
};

export type InitialStateLocation = {
  currentLocation: {
    status: IStatus;
    coords: CoordinateType;
    initialAddress: string;
  };
  destiny?: {
    coords: CoordinateType;
    destinyAddress: string;
  };
  route: RouteInfo & {
    status: IStatus;
    comsumption: string;
  };
  history: {
    status: IStatus;
    list: ItemHistory[];
  };
};
