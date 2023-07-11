import { useResponse } from '../../../Hooks/useResponsive';
import sprite from '../../../icons/sprite.svg';
import {
  NavContainer,
  LinkList,
  LinkItem,
  MainLink,
  LibraryLink,
  LogoLink,
  LogoSvg,
  Span,
} from './LibraryNav.styled';

export const LibraryNav = () => {
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
          <MainLink to={'/'}>HOME</MainLink>
        </LinkItem>
        <LinkItem>
          <LibraryLink to={'/library/watched'}>MY LIBRARY</LibraryLink>
        </LinkItem>
      </LinkList>
    </NavContainer>
  );
};
