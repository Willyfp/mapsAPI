import styled from 'styled-components/native';

export const ScrollHistory = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 50,
  },
}))``;

export const Card = styled.View`
  padding-vertical: 20px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.text.secondary}50;
`;
