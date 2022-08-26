import React, {useEffect, useRef, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {connect, ConnectedProps} from 'react-redux';
import {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/core';
import {StateType} from '../../types';
import {getAdress, openNavigation} from '../../utils/location';
import Directions from './components/Directions';
import {ButtonHistory, ButtonMaps, StyledMap, stylesMap} from './styles';
import Text from '../../components/Text';
import {
  CurrentLocationCreators,
  DestinyCreators,
} from '../../store/reducers/location';
import {RootState} from '../../store/reducers';
import {API_MAPS_KEY, LATITUDE_DELTA, LONGITUDE_DELTA} from './utils/constants';

const mapDispatchToProps = {
  setCurrentLocation: CurrentLocationCreators.setCurrentLocationRequest,
  setDestiny: DestinyCreators.setDestiny,
  removeDestiny: DestinyCreators.removeDestiny,
};

const mapStateToProps = ({location}: RootState) => ({
  currentLocation: location.getIn(['currentLocation']),
  destiny: location.getIn(['destiny']),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Home = ({
  currentLocation,
  destiny,
  setCurrentLocation,
  setDestiny,
  removeDestiny,
}: PropsFromRedux) => {
  const {colors} = useTheme();

  const mapRef = useRef<MapView>(null);

  const {navigate} = useNavigation();

  const [state, setState] = useState<StateType>({
    onMapReady: false,
  });

  useEffect(() => {
    setCurrentLocation();
  }, []);

  const navigation = () => {
    if (destiny) {
      openNavigation(destiny.coords.latitude, destiny.coords.longitude);
    }
  };

  const openHistory = () => {
    navigate('History');
  };

  return (
    <>
      <StyledMap
        toolbarEnabled={false}
        loadingEnabled={!state.onMapReady}
        onMapReady={() => setState({onMapReady: true})}
        region={{
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        ref={mapRef}>
        <Marker coordinate={currentLocation?.coords} />

        {destiny && (
          <Directions
            initialLocation={{
              coords: currentLocation.coords,
            }}
            destiny={{
              coords: destiny.coords,
            }}
            mapRef={mapRef}
          />
        )}
      </StyledMap>

      <GooglePlacesAutocomplete
        fetchDetails
        placeholder="Para onde você quer ir?"
        keepResultsAfterBlur
        enablePoweredByContainer={false}
        textInputProps={{
          autoCapitalize: 'none',
          autoCorrect: false,
          allowFontScaling: false,
        }}
        onPress={async (data, details = null) => {
          removeDestiny();

          if (details) {
            const coordinates = {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            };

            const destinyAddress = await getAdress(
              coordinates.latitude,
              coordinates.longitude,
            );

            setDestiny({
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              destinyAddress,
            });
          }
        }}
        query={{
          key: API_MAPS_KEY,
          language: 'pt-br',
        }}
        styles={stylesMap()}
      />

      <ButtonHistory onPress={openHistory}>
        <FontAwesome5Icon
          name="history"
          color={colors.text.primary}
          size={20}
        />
      </ButtonHistory>

      {destiny && (
        <ButtonMaps onPress={navigation}>
          <FontAwesome5Icon
            name="location-arrow"
            color={colors.text.primary}
            size={20}
          />
          <Text fontSize={12} bold color={colors.text.primary}>
            IR
          </Text>
        </ButtonMaps>
      )}
    </>
  );
};

export default connector(Home);
