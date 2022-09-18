import { VStack } from '@chakra-ui/react';

import FirstHomeExtra from '../../molecules/FirstHomeExtra';
import SecondHomeExtra from '../../molecules/SecondHomeExtra';
import ThirdHomeExtra from '../../molecules/ThirdHomeExtra';

const MainGallery = (): JSX.Element => {
  return (
    <VStack
      mt="15rem"
      spacing={{ base: '1.5rem', sm: '2rem', lg: '3rem' }}
      align="stretch"
    >
      <FirstHomeExtra />
      <SecondHomeExtra />
      <ThirdHomeExtra />
    </VStack>
  );
};

export default MainGallery;
