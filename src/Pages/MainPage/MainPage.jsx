import { Nav } from '../../components/Main/Nav/Nav';
import { Search } from '../../components/Main/SearchForm/Search';
import { Header } from './MainPage.styled';
import { Footer } from '../../components/Footer/Footer';
import { Container } from '../../components/Container/Container';
import { FilmsList } from '../../components/FilmsList/FilmsList';

const MainPage = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav />
          <Search />
        </Container>
      </Header>
      <FilmsList />
      <Footer />
    </>
  );
};

export default MainPage;
