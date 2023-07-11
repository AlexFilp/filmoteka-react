import styled from 'styled-components';

import mobileImg from '../../images/mainPage/main-image-mobile.jpg';
import mobileImgx2 from '../../images/mainPage/main-image-mobile-x2.jpg';
import tabletImg from '../../images/mainPage/main-image-tablet.jpg';
import tabletImgx2 from '../../images/mainPage/main-image-tablet-x2.jpg';
import deskImg from '../../images/mainPage/main-image-desk.jpg';
import deskImgx2 from '../../images/mainPage/main-iamge-desk-x2.jpg';

export const Header = styled.header`
  padding-top: 40px;
  padding-bottom: 92px;
  background-image: url(${mobileImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 230px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    background-image: url(${tabletImg});
    height: 219px;
    padding-bottom: 81px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    background-image: url(${deskImg});
    height: 216px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileImgx2});

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
      background-image: url(${tabletImgx2});
    }

    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      background-image: url(${deskImgx2});
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
