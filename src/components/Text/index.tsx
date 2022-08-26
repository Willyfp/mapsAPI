import React from 'react';
import {TextProps, TextStyled} from './styles';

const Text = ({color, fontSize, bold, children, ...rest}: TextProps) => {
  return (
    <TextStyled
      allowFontScaling={false}
      color={color}
      fontSize={fontSize}
      bold={bold}
      {...rest}>
      {children}
    </TextStyled>
  );
};

export default Text;
