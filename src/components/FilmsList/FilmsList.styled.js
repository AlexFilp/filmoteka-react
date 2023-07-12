import styled from 'styled-components';

export const List = styled.ul`
  padding-bottom: 140px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding-bottom: 119px;
  }
`;
