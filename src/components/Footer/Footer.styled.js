import styled from 'styled-components';

export const FooterField = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: ${p => p.theme.backgroundColor.footerBg};
`;

export const TextWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;

  color: ${p => p.theme.colors.footerTextColor};

  font-family: ${p => p.theme.fonts.roboto};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Svg = styled.svg`
  fill: ${p => p.theme.colors.accentColor};
`;

export const GitLink = styled.a`
  text-decoration: underline;
  transition: color ${p => p.theme.transition};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
`;
