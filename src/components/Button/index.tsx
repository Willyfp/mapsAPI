import Text from 'components/Text';
import React from 'react';
import {useTheme} from 'styled-components';
import {ButtonProps} from 'types';
import {ButtonStyled} from './styles';

const Button = ({type, children, ...rest}: ButtonProps) => {
  const {colors} = useTheme();

  return (
    <ButtonStyled type={type} {...rest}>
      <Text color={colors.text.primary} bold fontSize={18}>
        {children}
      </Text>
    </ButtonStyled>
  );
};

export default Button;
