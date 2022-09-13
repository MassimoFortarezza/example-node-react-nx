import { Box } from '@chakra-ui/react';

import SkipLink from '../../atoms/SkipLink';
import MobileNav from '../../molecules/MobileNav';
import Navbar from '../../molecules/Navbar';

const Header = (): JSX.Element => {
  return (
    <Box
      as="header"
      bg="black"
      py={8}
      borderBottom={['1px', 'unset']}
      borderColor="divider"
    >
      <SkipLink />
      <Navbar />
      <MobileNav />
    </Box>
  );
};

export default Header;
