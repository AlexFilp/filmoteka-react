import {
  Wrapper,
  IconWrapper,
  FilmIcom,
  QuestionIcon,
  Text,
  HomeLink,
} from './NoFilms.styled';

export const NoFilms = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <FilmIcom />
        <QuestionIcon />
      </IconWrapper>
      <Text>Nothing here yet! </Text>
      <Text>
        Please go <HomeLink to="/">HOME</HomeLink> and chose some films!
      </Text>
    </Wrapper>
  );
};
