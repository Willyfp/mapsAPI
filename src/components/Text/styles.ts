import styled, {css} from 'styled-components/native';
import {TextProps as TextNativeProps, Text} from 'react-native';

export type TextProps = TextNativeProps & {
  color?: string;
  fontSize?: number;
  bold?: boolean;
};

export const TextStyled = styled(Text)<TextProps>`
  ${({color}) =>
    color &&
    css`
      color: ${color};
    `}
  ${({fontSize}) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `}
    ${({bold}) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
