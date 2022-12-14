import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import Logo from '../../atoms/Logo';
import FooterLinks from '../../molecules/FooterLinks';
import SocialLinks from '../../molecules/SocialLinks';

const Footer = (): JSX.Element => {
  return (
    <Box
      as="footer"
      mt={['7.5rem', '6rem', '12.5rem']}
      bg="black"
      textAlign={{ base: 'center', sm: 'left' }}
    >
      <Container
        pt={{ base: '3.25rem', sm: '3.75rem', lg: '4.6875rem' }}
        pb={['2rem']}
        maxW="container.lg"
        position="relative"
        px={6}
        _before={{
          content: '""',
          position: 'absolute',
          height: '0.25rem',
          width: '6.25rem',
          bg: 'accent',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          '@media screen and (min-width: 30em)': {
            transform: 'translateX(0)',
            left: '1.5rem',
          },
        }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '3rem', sm: '2rem' }}
          justify={{ lg: 'space-between' }}
        >
          <Logo />
          <FooterLinks />
        </Stack>
        <SimpleGrid
          templateColumns={{ sm: '50% 1fr' }}
          templateAreas={{ sm: '"a a""b c"', lg: '"a c""b c"' }}
          gap="3rem"
          mt="3rem"
        >
          <Text variant="darkBackground" gridArea={{ sm: 'a' }}>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
          <Text variant="darkBackground" gridArea={{ sm: 'b' }}>
            Copyright 2021. All Rights Reserved
          </Text>
          <Box
            gridArea={{ sm: 'c' }}
            justifySelf={{ sm: 'end' }}
            alignSelf={{ md: 'center' }}
          >
            <SocialLinks />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
