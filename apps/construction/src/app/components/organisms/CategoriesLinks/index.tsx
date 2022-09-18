import { Box, Heading, Stack } from '@chakra-ui/react';

import { links } from '../../../utils/links';
import CategoryLink from '../../molecules/CategoryLink';

const CategoriesLinks = (): JSX.Element => {
  return (
    <Box mt={['3rem', '4em', '5em']}>
      <Stack
        as="ul"
        direction={['column', 'row']}
        spacing={['4rem', '0.625rem', null, '1.875rem']}
        mt={'8rem'}
      >
        {links.slice(1).map((link) => (
          <CategoryLink {...link} key={link.id} />
        ))}
      </Stack>
    </Box>
  );
};

export default CategoriesLinks;
