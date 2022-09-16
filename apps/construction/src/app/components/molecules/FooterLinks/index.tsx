import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { links } from '../../../utils/links';

const FooterLinks = (): JSX.Element => {
  return (
    <Stack
      as="ul"
      spacing={{ base: '1rem', md: '2.125rem' }}
      direction={{ base: 'column', sm: 'row' }}
    >
      {links.map((link) => (
        <Box
          as="li"
          fontSize="0.8125rem"
          fontWeight="bold"
          _hover={{ color: 'accent' }}
          transition="color 0.2s linear"
          letterSpacing="0.125rem"
          key={link.id}
          color="white"
          textTransform="uppercase"
        >
          <Link to={link.url}>{link.text}</Link>
        </Box>
      ))}
    </Stack>
  );
};

export default FooterLinks;
