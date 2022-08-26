import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const StyledMap = styled(MapView)`
  flex: 1;
`;

export const ButtonMaps = styled.TouchableOpacity`
  height: 65px;
  width: 65px;
  border-radius: 32.5px;
  background-color: ${({theme}) => theme.colors.button};
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
  elevation: 6;
`;

export const ButtonHistory = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${({theme}) => theme.colors.button};
  position: absolute;
  bottom: 20px;
  left: 20px;
  align-items: center;
  justify-content: center;
  elevation: 6;
`;

export const stylesMap = () => ({
  container: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
  },
  textInput: {
    marginVertical: 10,
    elevation: 6,
  },
});
