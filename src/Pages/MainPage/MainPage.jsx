import { Nav } from '../../components/Main/Nav/Nav';
import { Search } from '../../components/Main/SearchForm/Search';
import { Container, Header } from './MainPage.styled';

const MainPage = () => {
  return (
    <Header>
      <Container>
        <Nav />
        <Search />
      </Container>
    </Header>
  );
};

export default MainPage;
