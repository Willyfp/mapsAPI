import {API_MAPS_KEY} from 'pages/Home/utils/constants';
import React, {RefObject} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {connect, ConnectedProps} from 'react-redux';
import {ModalCreators} from 'store/reducers/global';
import {RouteCreators} from 'store/reducers/location';
import {useTheme} from 'styled-components';
import {DirectionsResult} from 'types';
import ChildModal from '../ChildModal';

const mapDispatchToProps = {
  setModal: ModalCreators.setModal,
  setRoute: RouteCreators.setRoute,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type DirectionProps = PropsFromRedux & {
  initialLocation: {
    coords: {
      latitude: number;
      longitude: number;
    };
  };
  destiny: {
    coords: {
      latitude: number;
      longitude: number;
    };
  };
  mapRef: RefObject<MapView>;
};

const Directions = ({
  initialLocation,
  destiny,
  mapRef,
  setModal,
  setRoute,
}: DirectionProps) => {
  const {colors} = useTheme();

  const onGetRoute = (result: DirectionsResult) => {
    setModal({
      visible: true,
      child: (
        <ChildModal
          distance={Number(result.distance.toFixed(1))}
          time={{
            hours: Math.floor(result.duration / 60),
            minutes: Math.floor(result.duration % 60),
          }}
        />
      ),
    });

    mapRef.current?.fitToCoordinates(result.coordinates);
    setRoute({
      distance: Number(result.distance.toFixed(1)),
      time: {
        hours: Math.floor(result.duration / 60),
        minutes: Math.floor(result.duration % 60),
      },
    });
  };

  const errorDirection = () => {
    setModal({
      visible: true,
      type: 'error',
      message: 'Não foi possível traçar a rota',
    });
  };

  return (
    <>
      <Marker
        coordinate={{
          latitude: destiny?.coords.latitude,
          longitude: destiny?.coords.longitude,
        }}
      />
      <MapViewDirections
        timePrecision="now"
        precision="high"
        origin={initialLocation.coords}
        destination={destiny.coords}
        apikey={API_MAPS_KEY} // insert your API Key here
        strokeWidth={4}
        strokeColor={colors.direction}
        onError={errorDirection}
        onReady={onGetRoute}
      />
    </>
  );
};

export default connector(Directions);
