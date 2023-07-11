import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { ButtonList } from '../../components/Library/ButtonList/ButtonList';
import { LibraryNav } from '../../components/Library/LibraryNav/LibraryNav';
import { Container, Header } from './LibraryPage.styled';

const LibraryPage = () => {
  return (
    <>
      <Header>
        <Container>
          <LibraryNav />
          <ButtonList />
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LibraryPage;
