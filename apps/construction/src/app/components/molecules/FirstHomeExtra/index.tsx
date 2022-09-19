import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import FadeInOnScroll from '../../organisms/FadeInOnScroll';

const FirstHomeExtra: React.FC<{
  setSpeciality: () => void;
}> = ({ setSpeciality }) => {
  return (
    <FadeInOnScroll>
      <Stack
        textAlign={{ base: 'center', lg: 'left' }}
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ lg: '8.625rem' }}
        px={{ base: '1.5rem', lg: 0 }}
        pt={{ base: '3.4375rem', lg: '6rem' }}
        pb={{ base: '3.4375rem', lg: 0 }}
        borderRadius="0.5rem"
        background="url(/assets/images/home/desktop/pattern-circles.svg) no-repeat"
        backgroundSize="cover"
        backgroundPosition={{
          base: '50% -8.125rem',
          md: '50% -16.125rem',
          lg: '-15rem -9.125rem',
        }}
        backgroundColor="accent"
      >
        <Box mt={-200}>
          <picture>
            <source
              media="(min-width: 62em)"
              srcSet="/assets/images/home/desktop/image-speaker-zx9.avif"
            />
            <source
              media="(min-width: 30em)"
              srcSet="/assets/images/home/tablet/image-speaker-zx9.png"
            />
            <Image
              width={['10.625rem', '12.3125rem', null, '25.625rem']}
              src="/assets/images/home/mobile/image-speaker-zx9.png"
              objectFit="cover"
              mb={{ base: '2rem', lg: 0 }}
              ml={{ base: 'auto', lg: '7.3125rem' }}
              mr={['auto']}
              position="relative"
              top={{ lg: '.8rem' }}
              alt=""
            />
          </picture>
        </Box>
        <Box ml={{ lg: '8.625rem' }} marginInlineStart="0" pt={{ lg: '2rem' }}>
          <Heading
            as="h2"
            color="white"
            maxWidth={['11ch']}
            mx={{ base: 'auto', lg: 'unset' }}
            mb="1.5rem"
            fontSize={['2.25rem', '3.5rem']}
            letterSpacing={['0.0806em', '0.125em']}
            lineHeight="1"
          >
            Builders
          </Heading>
          <Text
            color="rgba(255,255,255, 0.75)"
            maxWidth={['30ch', '42ch', null, '38ch']}
            mx={{ base: 'auto', lg: 'unset' }}
            mb={{ base: '4.0625rem', lg: '2.5rem' }}
            fontSize="0.9375rem"
            fontWeight="thin"
            lineHeight="1.56"
          >
            Choose from the best builders in the area. is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Text>
          <Link to="/companies">
            <Button
              bg="black"
              _hover={{ bg: '#4C4C4C' }}
              onClick={setSpeciality}
            >
              See Companies
            </Button>
          </Link>
        </Box>
      </Stack>
    </FadeInOnScroll>
  );
};

export default FirstHomeExtra;
