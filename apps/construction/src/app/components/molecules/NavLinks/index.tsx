import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { links } from '../../../utils/links';

const NavLinks = (): JSX.Element => {
  const location = useLocation();

  return (
    <Box as="nav" display={{ base: 'none', lg: 'block' }}>
      <HStack as="ul" display="flex" spacing={9} listStyleType="none">
        {links.map((link) => (
          <Box
            as="li"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ color: 'accent' }}
            transition="color 0.2s linear"
            letterSpacing="0.125em"
            key={link.id}
            color={location.pathname === link.url ? 'accent' : 'white'}
            textTransform="uppercase"
          >
            <NavLink to={link.url}>{link.text}</NavLink>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default NavLinks;
