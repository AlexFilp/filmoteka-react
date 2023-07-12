import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const List = styled.ul``;
