import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {API_MAPS_KEY} from 'pages/Home/utils/constants';
import {Linking} from 'react-native';

export const getCurrencyLocation = async () => {
  const isDev = __DEV__;

  const config = {
    timeout: 15000,
    enableHighAccuracy: isDev,
    maximumAge: 30000,
  };

  const get = (): Promise<GeolocationResponse> =>
    new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject, config);
    });

  const position = await get();

  return position;
};

export const openNavigation = (latitude: number, longitude: number) => {
  Linking.openURL(`google.navigation:q=${`${latitude},${longitude}&mode=c`}`);
};

export const getAdress = async (latitude: number, longitude: number) => {
  const get = (): Promise<Response> =>
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${`${latitude},${longitude}&key=${API_MAPS_KEY}`}`,
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.results[0].formatted_address;
      });

  const name = await get();

  return name;
};
