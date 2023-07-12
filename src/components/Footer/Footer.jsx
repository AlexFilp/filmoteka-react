import { Container } from '../Container/Container';
import { FooterField, TextWrapper, Text, Svg, GitLink } from './Footer.styled';
import sprite from '../../icons/sprite.svg';

export const Footer = () => {
  return (
    <FooterField>
      <Container>
        <TextWrapper>
          <Text>
            &copy; 2020 | All Rights Reserved | Developed with{' '}
            <Svg width="14" height="12">
              <use href={sprite + '#icon-love'}></use>
            </Svg>{' '}
            by{' '}
            <GitLink
              href="https://github.com/AlexFilp"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              Oleksandr
            </GitLink>
          </Text>
        </TextWrapper>
      </Container>
    </FooterField>
  );
};
