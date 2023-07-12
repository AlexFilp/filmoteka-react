import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 320px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 1280px;
  }
`;
