import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 60px auto 0;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    gap: 32px;
    margin: 40px auto 0;
  }
`;

export const LibraryLink = styled(NavLink)`
  width: 130px;
  height: 44px;
  border-radius: 5px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${p => p.theme.fonts.roboto};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;

  color: ${p => p.theme.colors.primaryColor};
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.primaryColor};

  transition: background-color ${p => p.theme.transition},
    border-color ${p => p.theme.transition},
    transform ${p => p.theme.transition}, filter ${p => p.theme.transition};

  &:hover,
  &:focus,
  &.active {
    filter: ${p => p.theme.filter};
    background-color: ${p => p.theme.colors.accentColor};
    border-color: transparent;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 152px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 148px;
  }
`;
