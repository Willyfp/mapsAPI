import {ColorValue} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import styled from 'styled-components/native';

export const InputStyled = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.text.secondary as ColorValue,
}))`
  flex: 1;
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const InputMaskStyled = styled(TextInputMask).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.text.secondary as ColorValue,
}))`
  flex: 1;
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const ViewInput = styled.View`
  width: 90%;
  height: 45px;
  background-color: transparent;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.border};
  border-radius: 15px;
  margin-top: 15px;
`;
