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
  LogoSvg,
  NaviLink,
  LogoLink,
  Span,
  Form,
  Input,
  Button,
  SearchSvg,
  ErrText,
  BtnList,
  Btn,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const [isLibraryLocation, setIsLibraryLocation] = useState(false);
  const [error] = useState(false);

  const { isMobile } = useResponse();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/library') {
      setIsLibraryLocation(true);
    } else {
      setIsLibraryLocation(false);
    }
  }, [location]);

  return (
    <>
      <Header isLibraryLocation={isLibraryLocation}>
        <Container>
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
                <NaviLink to={'/library'}>MY LIBRARY</NaviLink>
              </LinkItem>
            </LinkList>
          </NavContainer>
          {isLibraryLocation ? (
            <BtnList>
              <li>
                <Btn type="button">WATCHED</Btn>
              </li>
              <li>
                <Btn type="button">QUEUE</Btn>
              </li>
            </BtnList>
          ) : (
            <Form>
              <Input type="text" placeholder="Movie search" />
              <Button type="submit">
                <SearchSvg width="12" height="12">
                  <use href={sprite + '#icon-search'}></use>
                </SearchSvg>
              </Button>
              {!error && (
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