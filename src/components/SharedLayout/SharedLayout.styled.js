import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
// MAINPAGE
import mobileImg from '../../images/mainPage/main-image-mobile.jpg';
import mobileImgx2 from '../../images/mainPage/main-image-mobile-x2.jpg';
import tabletImg from '../../images/mainPage/main-image-tablet.jpg';
import tabletImgx2 from '../../images/mainPage/main-image-tablet-x2.jpg';
import deskImg from '../../images/mainPage/main-image-desk.jpg';
import deskImgx2 from '../../images/mainPage/main-iamge-desk-x2.jpg';
// LIBRARY
import libraryMobileImg from '../../images/library/library-image-mobile.jpg';
import libraryMobileImgx2 from '../../images/library/library-image-mobile-x2.jpg';
import libraryTabletImg from '../../images/library/library-image-tablet.jpg';
import libraryTabletImgx2 from '../../images/library/library-image-tablet-x2.jpg';
import libraryDeskImg from '../../images/library/library-image-desktop.jpg';
import libraryDeskImgx2 from '../../images/library/library-image-desktop-x2.jpg';

export const Header = styled.header`
  padding-top: 40px;
  padding-bottom: 92px;
  background-image: ${({ isLibraryLocation }) =>
    isLibraryLocation ? `url(${libraryMobileImg})` : `url(${mobileImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 230px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    background-image: ${({ isLibraryLocation }) =>
      isLibraryLocation ? `url(${libraryTabletImg})` : `url(${tabletImg})`};
    height: 216px;
    padding-bottom: 81px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    background-image: ${({ isLibraryLocation }) =>
      isLibraryLocation ? `url(${libraryDeskImg})` : `url(${deskImg})`};
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${({ isLibraryLocation }) =>
      isLibraryLocation ? `url(${libraryMobileImgx2})` : `url(${mobileImgx2})`};

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
      background-image: ${({ isLibraryLocation }) =>
        isLibraryLocation
          ? `url(${libraryTabletImgx2})`
          : `url(${tabletImgx2})`};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      background-image: ${({ isLibraryLocation }) =>
        isLibraryLocation ? `url(${libraryDeskImgx2})` : `url(${deskImgx2})`};
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

export const Form = styled.form`
  position: relative;
  display: flex;
  margin: 0 auto;
  margin-top: 54px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin-top: 40px;
    width: 336px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-top: 41px;
    width: 394px;
  }
`;

export const Input = styled.input`
  padding: 0 20px 4px 5px;
  width: 100%;
  background-color: transparent;

  border: none;
  outline: none;
  border-bottom: 1px solid #ffffff;

  color: ${p => p.theme.colors.primaryColor};
  font-family: ${p => p.theme.fonts.roboto};
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: ${p => p.theme.colors.primaryColor};
    font-family: ${p => p.theme.fonts.roboto};
    font-size: 14px;
    font-weight: 400;
  }

  transition: border-color ${p => p.theme.transition};

  &:focus-within {
    border-color: ${p => p.theme.colors.underlineColor};
  }
`;

export const Button = styled.button`
  position: absolute;
  padding: 7px;
  top: -4px;
  right: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SearchSvg = styled.svg`
  fill: transparent;
  stroke: ${p => p.theme.colors.primaryColor};
`;

export const ErrText = styled.p`
  position: absolute;
  bottom: -48px;
  left: 0;
  color: ${p => p.theme.colors.underlineColor};
  font-family: ${p => p.theme.fonts.roboto};
  font-size: 14px;
  font-weight: 400;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 420px;
    bottom: -30px;
    left: -40px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    left: -11px;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 66px auto 0;
`;

export const Btn = styled.button`
  width: 130px;
  height: 44px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.primaryColor};

  color: ${p => p.theme.colors.primaryColor};

  font-family: ${p => p.theme.fonts.roboto};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;

  transition: background-color ${p => p.theme.transition},
    border-color ${p => p.theme.transition},
    transform ${p => p.theme.transition}, filter ${p => p.theme.transition};

  &:hover,
  &:focus {
    filter: ${p => p.theme.filter};
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.accentColor};
    border-color: transparent;
  }
`;
