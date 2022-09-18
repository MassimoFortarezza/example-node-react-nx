import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

const BestGear = (): JSX.Element => {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: '2.5rem', lg: 0 }}
      mt="7.5rem"
      textAlign={{ base: 'center', lg: 'left' }}
      alignItems={{ lg: 'center' }}
    >
      <Box as="picture" flex="1" order={{ lg: 1 }} ml={{ lg: '1.875rem' }}>
        <source
          media="(min-width: 62em)"
          srcSet="/assets/images/shared/desktop/image-best-gear.jpeg"
        />
        <source
          media="(min-width: 30em)"
          srcSet="/assets/images/shared/tablet/image-best-gear.jpeg"
        />
        <Image
          src="/assets/images/shared/mobile/image-best-gear.jpeg"
          objectFit="cover"
          borderRadius="0.5rem"
          alt="man listening to music with headphones"
        />
      </Box>
      <Box flex="1" marginStart={{ lg: 0 }}>
        <Heading
          as="h2"
          textTransform="uppercase"
          mb={{ base: '2rem', sm: '2.5rem' }}
          letterSpacing="0.0894rem"
          maxWidth={{ base: '20ch', sm: '25ch', lg: '22ch' }}
          mx={{ base: 'auto', lg: 'unset' }}
          fontSize={{ base: '1.75rem', sm: '2.5rem' }}
        >
          Bringing you the{' '}
          <Box as="span" color="accent">
            best
          </Box>{' '}
          building gear
        </Heading>
        <Text px={{ sm: '2rem', md: '6rem', lg: 0 }} pr={{ lg: '3rem' }}>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s.
        </Text>
      </Box>
    </Stack>
  );
};

export default BestGear;
