import styled, {css} from 'styled-components/native';
import {ButtonProps} from 'types';

export const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  border-radius: 20px;
  elevation: 6;

  ${({type, theme}) =>
    type === 'transparentWithBorder' &&
    css`
      background-color: transparent;
      border-width: 1px;
      border-color: ${theme.colors.text.primary};
    `}

  ${({type, theme}) =>
    type === 'cancel' &&
    css`
      background-color: ${theme.colors.error};
    `}

    ${({type, theme}) =>
    type === 'submit' &&
    css`
      background-color: ${theme.colors.button};
    `}
`;
