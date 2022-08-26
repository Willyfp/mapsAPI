import Text from 'components/Text';
import React from 'react';
import {TextInputProps} from 'react-native';
import {TextInputMaskProps} from 'react-native-masked-text';
import {useTheme} from 'styled-components';
import {InputProps} from 'types';
import {InputMaskStyled, InputStyled, ViewInput} from './styles';

const TextInput = ({masked, error, ...rest}: InputProps) => {
  const {colors} = useTheme();

  return (
    <>
      <ViewInput>
        {masked ? (
          <InputMaskStyled {...(rest as TextInputMaskProps)} />
        ) : (
          <InputStyled {...(rest as TextInputProps)} />
        )}
      </ViewInput>

      <Text fontSize={14} color={colors.error}>
        {error}
      </Text>
    </>
  );
};

export default TextInput;
