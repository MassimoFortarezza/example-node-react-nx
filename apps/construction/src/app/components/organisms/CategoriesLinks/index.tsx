import { Box, Heading, Stack } from '@chakra-ui/react';

import { links } from '../../../utils/links';
import CategoryLink from '../../molecules/CategoryLink';

const CategoriesLinks = (): JSX.Element => {
  return (
    <Box mt={['4rem', '6em', '8em']}>
      <Heading
        textAlign="center"
        as="h2"
        fontSize={{ base: '0.9375rem', lg: '1.125rem' }}
        letterSpacing={{ base: '0.0669em', lg: '0.0806em' }}
      >
        Choose your city
      </Heading>
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
