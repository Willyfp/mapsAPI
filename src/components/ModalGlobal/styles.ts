import styled from 'styled-components/native';

export const CenteredView = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.text.secondary}50;
  align-items: center;
  justify-content: center;
`;

export const ViewModal = styled.View`
  width: 90%;
  background-color: ${({theme}) => theme.colors.text.primary};
  padding: 25px;
  align-items: center;
  elevation: 6;
  border-radius: 20px;
`;
