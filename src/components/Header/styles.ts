import styled from 'styled-components/native';

export const ViewHeader = styled.View`
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: ${({theme}) => theme.colors.button};
`;

export const ButtonHeader = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;
