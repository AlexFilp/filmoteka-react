import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import mobileImg from '../../images/mainPage/main-image-mobile.jpg';
import mobileImgx2 from '../../images/mainPage/main-image-mobile-x2.jpg';

export const Header = styled.header`
  padding-top: 40px;
  padding-bottom: 92px;
  background-image: url(${mobileImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileImgx2});
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
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
  align-items: baseline;
  gap: 8px;
  transition: transform ${p => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Svg = styled.svg`
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
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 54px;
  width: 280px;
`;

export const Input = styled.input`
  padding-left: 5px;
  padding-right: 20px;
  padding-bottom: 4px;
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
  top: 2px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
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
`;
