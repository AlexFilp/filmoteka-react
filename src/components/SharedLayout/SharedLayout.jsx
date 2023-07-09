import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import sprite from '../../icons/sprite.svg';
import { useResponse } from '../../Hooks/useResponsive';
import {
  Container,
  NavContainer,
  Header,
  LinkList,
  LinkItem,
  Svg,
  NaviLink,
  LogoLink,
  Span,
  Form,
  Input,
  Button,
  SearchSvg,
  ErrText,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const [libraryLocation, setLibraryLocation] = useState(false);
  const [error] = useState(false);

  const { isMobile } = useResponse();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/library') {
      setLibraryLocation(true);
    } else {
      setLibraryLocation(false);
    }
  }, [location]);

  return (
    <>
      <Header>
        <Container>
          <NavContainer>
            <LogoLink to="/">
              <Svg width="24" height="24">
                <use href={sprite + '#icon-film'}></use>
              </Svg>
              {!isMobile && <Span>Filmoteka</Span>}
            </LogoLink>
            <LinkList>
              <LinkItem>
                <NaviLink to={'/'}>HOME</NaviLink>
              </LinkItem>
              <LinkItem>
                <NaviLink to={'/library'}>MY LIBRARY</NaviLink>
              </LinkItem>
            </LinkList>
          </NavContainer>
          {!libraryLocation && (
            <Form>
              <Input type="text" placeholder="Movie search" />
              <Button type="submit">
                <SearchSvg width="12" height="12">
                  <use href={sprite + '#icon-search'}></use>
                </SearchSvg>
              </Button>
              {error && (
                <ErrText>
                  Search result not successful. Enter the correct movie name
                  please!
                </ErrText>
              )}
            </Form>
          )}
        </Container>
      </Header>
      <Suspense fallback={<h1>Suspence LOADING...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
