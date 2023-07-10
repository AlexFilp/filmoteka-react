import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import sprite from '../../icons/sprite.svg';
import { useResponse } from '../../Hooks/useResponsive';
import { Loader } from '../../components/Loader/Loader';
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
  BtnList,
  LibraryLink,
} from './LibraryPage.styled';

const LibraryPage = () => {
  // const [isLibraryLocation, setIsLibraryLocation] = useState(false);

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
                <NaviLink to={'/library'}>MY LIBRARY</NaviLink>
              </LinkItem>
            </LinkList>
          </NavContainer>
          <BtnList>
            <li>
              <LibraryLink type="button" to="/library/watched">
                WATCHED
              </LibraryLink>
            </li>
            <li>
              <LibraryLink type="button" to="/library/queue">
                QUEUE
              </LibraryLink>
            </li>
          </BtnList>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LibraryPage;
