import { Box, Button, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import FadeInOnScroll from '../../organisms/FadeInOnScroll';

const ZX7Speaker = (): JSX.Element => {
  return (
    <FadeInOnScroll>
      <Box
        borderRadius="0.5rem"
        overflow="hidden"
        position="relative"
        mt="6rem"
      >
        <Box mt={-30}>
          <picture>
            <source
              media="(min-width: 62em)"
              srcSet="/assets/images/home/desktop/image-speaker-zx7.jpg"
            />
            <source
              media="(min-width: 30em)"
              srcSet="/assets/images/home/tablet/image-speaker-zx7.jpg"
            />
            <Image
              src="/assets/images/home/mobile/image-speaker-zx7.jpg"
              objectFit="cover"
              width="100%"
              alt=""
            />
          </picture>
        </Box>
        <Box
          position="absolute"
          top="50%"
          left={{ base: '1.5rem', sm: '3.875rem', lg: '5.9375rem' }}
          transform="translateY(-50%)"
        >
          <Heading mb="2rem" fontSize="1.75rem" color="black">
            ZX7 Speaker
          </Heading>
          <Link to="/speakers/zx7-speaker">
            <Button variant="secondary">See Product</Button>
          </Link>
        </Box>
      </Box>
    </FadeInOnScroll>
  );
};

export default ZX7Speaker;
