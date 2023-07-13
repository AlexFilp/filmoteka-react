import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { ButtonList } from '../../components/Library/ButtonList/ButtonList';
import { LibraryNav } from '../../components/Library/LibraryNav/LibraryNav';
import { Container } from '../../components/Container/Container';
import { Header, Main, Section } from './LibraryPage.styled';
import { Footer } from '../../components/Footer/Footer';

const LibraryPage = () => {
  return (
    <>
      <Header>
        <Container>
          <LibraryNav />
          <ButtonList />
        </Container>
      </Header>
      <Main>
        <Section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default LibraryPage;
