import { useResponse } from '../../../Hooks/useResponsive';
import sprite from '../../../icons/sprite.svg';
import {
  NavContainer,
  LinkList,
  LinkItem,
  NaviLink,
  LogoLink,
  LogoSvg,
  Span,
} from './Nav.styled';

export const Nav = () => {
  const { isMobile } = useResponse();
  return (
    <NavContainer>
      <LogoLink to="/">
        <LogoSvg width="24" height="24">
          <use href={sprite + '#icon-film'}></use>
        </LogoSvg>
        {!isMobile && <Span>Filmoteka</Span>}
      </LogoLink>
      <LinkList>
        <LinkItem>
          <NaviLink to={'/'}>HOME</NaviLink>
        </LinkItem>
        <LinkItem>
          <NaviLink to={'/library/watched'}>MY LIBRARY</NaviLink>
        </LinkItem>
      </LinkList>
    </NavContainer>
  );
};
