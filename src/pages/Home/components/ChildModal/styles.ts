import styled from 'styled-components/native';

export const ViewInfo = styled.View`
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.border};
  border-radius: 20px;
  padding: 8px;
  margin-bottom: 15px;
`;

export const ViewValue = styled.View`
  margin-vertical: 20px;
  align-items: center;
`;
