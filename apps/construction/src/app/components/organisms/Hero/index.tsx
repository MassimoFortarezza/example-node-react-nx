import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = (): JSX.Element => {
  const MotionBox = motion(Box);
  const MotionContainer = motion(Container);
  return (
    <MotionBox
      position="relative"
      bg="black"
      zIndex="1"
      overflow="hidden"
      pt={{ base: '6rem', sm: '8rem', lg: '10rem' }}
      pb="7rem"
      textAlign={{ base: 'center', lg: 'left' }}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: '2' }}
        _after={{
          content: "''",
          position: 'absolute',
          background:
            "url('/assets/images/home/mobile/image-hero.jpeg') center/contain no-repeat",
          width: '100%',
          height: '80%',
          top: '-6rem',
          left: 0,
          zIndex: '-1',
          '@media screen and (min-width: 30em)': {
            background:
              "url('/assets/images/home/tablet/image-hero.jpeg') center/contain no-repeat",
          },
          '@media screen and (min-width: 62em)': {
            width: '150%',
            height: '220%',
            background:
              "url('/assets/images/home/desktop/image-hero.jpeg') center/contain no-repeat",
          },
        }}
      ></MotionBox>
      <MotionContainer
        maxW="container.lg"
        px={6}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: '1.5',
            duration: '2',
          },
        }}
      >
        <Heading
          as="h1"
          fontSize={['2rem', '3.0rem']}
          color="white"
          maxWidth="15ch"
          mx={{ base: 'auto', lg: 0 }}
          mb={6}
          letterSpacing="0.0806rem"
          lineHeight="1.1"
        >
          <Box
            as="strong"
            color="textLight"
            textTransform="uppercase"
            mb={4}
            letterSpacing="0.525rem"
            display="block"
            fontSize="0.875rem"
          >
            Build
          </Box>
          Your <Box color="accent">dream project</Box>
        </Heading>
        <Text
          color="textLight"
          fontSize="0.9375rem"
          maxWidth="38ch"
          mx={{ base: 'auto', lg: 0 }}
          mb={5}
          lineHeight="1.7"
        >
          Find a partner to help you realize your projects.
        </Text>
        <Box width={{ base: '100%', lg: '30%' }} mb={4}>
          <InputGroup>
            <Input
              backgroundColor="white"
              placeholder="Plumbing SAGL"
              autoFocus
              borderRadius={25}
              focusBorderColor="accent"
            />
            <InputRightElement
              borderBottomEndRadius={25}
              borderTopEndRadius={25}
              children={
                <Button
                  pl={3}
                  pr={4}
                  borderBottomStartRadius={0}
                  borderTopStartRadius={0}
                >
                  <SearchIcon color="textLight" height="100%" />
                </Button>
              }
            />
          </InputGroup>
        </Box>
      </MotionContainer>
    </MotionBox>
  );
};

export default Hero;
