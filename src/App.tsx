import { AdressSection } from './components/adressSection';
import { Carousel } from './components/carousel';
import { Header } from './components/header';
import { Container } from './styles/container';
import { GlobalStyles } from './styles/globalStyles';
import { GlobalReset } from './styles/reset';

function App() {
  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Container>
        <Header />
        <Carousel>
          <AdressSection />
        </Carousel>
      </Container>
    </>
  );
}

export default App;
