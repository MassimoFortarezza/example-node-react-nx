import { Container } from '@chakra-ui/react';

import AnimatedBestGear from '../molecules/AnimatedBestGear';
import CitySelections from '../organisms/CitySelections';
import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import MainGallery from '../organisms/MainGallery';

const HomePage = () => (
  <>
    <Header />
    <main id="main">
      <Hero />
      <Container maxW="container.lg" px={6}>
        <CitySelections />
        <MainGallery />
        <AnimatedBestGear />
      </Container>
    </main>
  </>
);

export default HomePage;
