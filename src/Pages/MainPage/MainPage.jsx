import { useState } from 'react';
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
} from './MainPage.styled';

const MainPage = () => {
  // const [isLibraryLocation, setIsLibraryLocation] = useState(false);
  const [error] = useState(false);

  const { isMobile } = useResponse();
  // const location = useLocation();

  // useEffect(() => {
  //   if (
  //     location.pathname === '/library' ||
  //     location.pathname === '/library/watched' ||
  //     location.pathname === '/library/queue'
  //   ) {
  //     setIsLibraryLocation(true);
  //   } else {
  //     setIsLibraryLocation(false);
  //   }
  // }, [location]);

  // const handleWathedPage = () => {
  //   setCurrentPage('watched');
  // };

  // const handleQueuePage = () => {
  //   setCurrentPage('queue');
  // };

  return (
    <>
      <Header>
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
                <NaviLink to={'/library/watched'}>MY LIBRARY</NaviLink>
              </LinkItem>
            </LinkList>
          </NavContainer>

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
        </Container>
      </Header>
    </>
  );
};

export default MainPage;

// <BtnList>
//   <li>
//     <WatchedLink type="button" to="/library/watched">
//       WATCHED
//     </WatchedLink>
//   </li>
//   <li>
//     <QueueLink type="button" to="/library/queue">
//       QUEUE
//     </QueueLink>
//   </li>
// </BtnList>
