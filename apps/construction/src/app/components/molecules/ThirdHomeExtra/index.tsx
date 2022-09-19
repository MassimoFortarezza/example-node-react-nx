import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import FadeInOnScroll from '../../organisms/FadeInOnScroll';

const ThirdHomeExtra: React.FC<{
  setSpeciality: () => void;
}> = ({ setSpeciality }) => {
  return (
    <SimpleGrid
      columns={[1, 2]}
      spacing={{ base: '1.5rem', sm: '0.75rem', lg: '1.875rem' }}
    >
      <FadeInOnScroll>
        <Box as="picture" height="100%">
          <source
            media="(min-width: 62em)"
            srcSet="/assets/images/home/desktop/image-earphones-yx1.avif"
          />
          <source
            media="(min-width: 30em)"
            srcSet="/assets/images/home/tablet/image-earphones-yx1.jpg"
          />
          <Image
            src="/assets/images/home/mobile/image-earphones-yx1.jpg"
            objectFit="cover"
            borderRadius="0.5rem"
            alt=""
          />
        </Box>
      </FadeInOnScroll>
      <FadeInOnScroll transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}>
        <Box
          bg="gray"
          height="100%"
          py={{ base: '2.5625rem', sm: 'unset' }}
          pl={{
            base: '1.5rem',
            sm: '2rem',
            md: '2.5625rem',
            lg: '5.9375rem',
          }}
          borderRadius="0.5rem"
          position="relative"
        >
          <Box
            position={{ sm: 'absolute' }}
            top="50%"
            transform={['translateY(0)', 'translateY(-50%)']}
            pr={{ sm: '1rem' }}
          >
            <Heading as="h2" mb="2rem" fontSize="1.75rem" color="black">
              Electricians
            </Heading>
            <Text
              maxWidth={['30ch', '42ch', null, '38ch']}
              mx={{ base: 'auto', lg: 'unset' }}
              mb={{ base: '4.0625rem', lg: '2.5rem' }}
              fontSize="0.9375rem"
              fontWeight="thin"
              lineHeight="1.56"
            >
              Choose from the best Electricians in the area.
            </Text>
            <Link to="/companies">
              <Button variant="secondary" onClick={setSpeciality}>
                See Companies
              </Button>
            </Link>
          </Box>
        </Box>
      </FadeInOnScroll>
    </SimpleGrid>
  );
};

export default ThirdHomeExtra;
