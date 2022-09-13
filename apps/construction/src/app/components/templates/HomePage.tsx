import { Container } from '@chakra-ui/react';

import AnimatedBestGear from '../molecules/AnimatedBestGear';
import CategoriesLinks from '../organisms/CategoriesLinks';
import Hero from '../organisms/Hero';
import MainGallery from '../organisms/MainGallery';

const HomePage = () => (
  <main id="main">
    <Hero />
    <Container maxW="container.lg" px={6}>
      <CategoriesLinks />
      <MainGallery />
      <AnimatedBestGear />
    </Container>
  </main>
);

export default HomePage;
