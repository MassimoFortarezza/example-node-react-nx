import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import FadeInOnScroll from '../../organisms/FadeInOnScroll';

const SecondHomeExtra = (): JSX.Element => {
  return (
    <FadeInOnScroll>
      <Box
        borderRadius="0.5rem"
        overflow="hidden"
        position="relative"
        mt="6rem"
      >
        <Box mt={-30} height={'300px'}>
          <picture>
            <source
              media="(min-width: 62em)"
              srcSet="/assets/images/home/desktop/image-speaker-zx7.avif"
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
          <Heading fontSize="1.75rem" color="black">
            Plumbers
          </Heading>
          <Text
            maxWidth={['30ch', '42ch', null, '38ch']}
            mx={{ base: 'auto', lg: 'unset' }}
            mb={{ base: '4.0625rem', lg: '2.5rem' }}
            fontSize="0.9375rem"
            fontWeight="thin"
            lineHeight="1.56"
          >
            Choose from the best Plumbers in the area.
          </Text>
          <Link to="/companies">
            <Button variant="secondary">See Companies</Button>
          </Link>
        </Box>
      </Box>
    </FadeInOnScroll>
  );
};

export default SecondHomeExtra;
