import styled from 'styled-components';
import { PiFilmReelFill } from 'react-icons/pi';
import { MdQuestionMark } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding-top: 20px;
`;

export const IconWrapper = styled.div`
  position: relative;
`;

export const FilmIcom = styled(PiFilmReelFill)`
  width: 150px;
  height: 150px;

  fill: ${p => p.theme.colors.accentColor};
`;

export const QuestionIcon = styled(MdQuestionMark)`
  position: absolute;
  top: -25px;
  right: -25px;

  width: 75px;
  height: 75px;

  fill: ${p => p.theme.colors.accentColor};
`;

export const Text = styled.h2`
  color: ${p => p.theme.colors.footerTextColor};
  text-align: center;

  font-family: ${p => p.theme.fonts.roboto};
  font-size: 30px;
  font-weight: 400;

  &:last-child {
    font-size: 20px;
    margin-top: 5px;
  }
`;

export const HomeLink = styled(Link)`
  font-weight: 600;
  text-decoration: underline;
  color: ${p => p.theme.colors.accentColor};
`;
