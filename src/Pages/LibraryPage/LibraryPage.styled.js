import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import libraryMobileImg from '../../images/library/library-image-mobile.jpg';
import libraryMobileImgx2 from '../../images/library/library-image-mobile-x2.jpg';
import libraryTabletImg from '../../images/library/library-image-tablet.jpg';
import libraryTabletImgx2 from '../../images/library/library-image-tablet-x2.jpg';
import libraryDeskImg from '../../images/library/library-image-desktop.jpg';
import libraryDeskImgx2 from '../../images/library/library-image-desktop-x2.jpg';

export const Header = styled.header`
  padding-top: 40px;
  padding-bottom: 92px;
  background-image: url(${libraryMobileImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 230px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    background-image: url(${libraryTabletImg});
    height: 219px;
    padding-bottom: 81px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    background-image: url(${libraryDeskImg});
    height: 216px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${libraryMobileImgx2});

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
      background-image: url(${libraryTabletImgx2});
    }

    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      background-image: url(${libraryDeskImgx2});
      padding-bottom: 80px;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 320px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    max-width: 768px;
    padding: 0 33px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 1280px;
    padding: 0 32px;
  }
`;

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

export const NaviLink = styled(NavLink)`
  position: relative;
  color: ${p => p.theme.colors.primaryColor};
  font-family: ${p => p.theme.fonts.roboto};
  font-size: 12px;
  font-weight: 500;
  transition: color ${p => p.theme.transition};

  &.active {
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

//

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 66px auto 0;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    gap: 32px;
    margin: 37px auto 0;
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
