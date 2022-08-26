import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.0922;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const API_MAPS_KEY = 'AIzaSyAJ9TKIMyEFz0YzZPCWwdTZxm6GaFIhipM';
