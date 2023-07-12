import styled from 'styled-components';

import libraryMobileImg from '../../images/library/library-image-mobile.jpg';
import libraryMobileImgx2 from '../../images/library/library-image-mobile-x2.jpg';
import libraryTabletImg from '../../images/library/library-image-tablet.jpg';
import libraryTabletImgx2 from '../../images/library/library-image-tablet-x2.jpg';
import libraryDeskImg from '../../images/library/library-image-desktop.jpg';
import libraryDeskImgx2 from '../../images/library/library-image-desktop-x2.jpg';

export const Header = styled.header`
  padding-top: 40px;
  padding-bottom: 62px;
  background-image: url(${libraryMobileImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 230px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    background-image: url(${libraryTabletImg});
    height: 219px;
    padding-bottom: 60px;
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
    padding: 0 32px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 1280px;
  }
`;
