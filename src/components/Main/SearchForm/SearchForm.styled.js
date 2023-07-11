import styled from 'styled-components';

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
