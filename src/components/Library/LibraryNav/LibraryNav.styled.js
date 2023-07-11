import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const LinkItem = styled.li`
  display: flex;
`;

export const MainLink = styled(NavLink)`
  position: relative;
  color: ${p => p.theme.colors.primaryColor};
  font-family: ${p => p.theme.fonts.roboto};
  font-size: 12px;
  font-weight: 500;
  transition: color ${p => p.theme.transition};
`;

export const LibraryLink = styled(NavLink)`
  position: relative;
  color: ${p => p.theme.colors.primaryColor};
  font-family: ${p => p.theme.fonts.roboto};
  font-size: 12px;
  font-weight: 500;
  transition: color ${p => p.theme.transition};

  &::after {
    position: absolute;
    bottom: -3px;
    left: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: ${p => p.theme.colors.underlineColor};
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: transform ${p => p.theme.transition};
  &:hover,
  &:focus {
    svg {
      transform: scale(1.2);
    }
  }
`;

export const LogoSvg = styled.svg`
  fill: transparent;
  stroke: ${p => p.theme.colors.primaryColor};
  transition: transform ${p => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Span = styled.p`
  color: ${p => p.theme.colors.primaryColor};
  text-align: center;
  font-family: ${p => p.theme.fonts.roboto};
  font-size: 30px;
  font-weight: 500;
`;
