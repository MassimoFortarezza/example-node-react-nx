import { Stack } from '@chakra-ui/react';

import { links } from '../../../utils/links';
import CategoryLink from '../../molecules/CategoryLink';

const CategoriesLinks = (): JSX.Element => {
  return (
    <Stack
      as="ul"
      direction={['column', 'row']}
      spacing={['4rem', '0.625rem', null, '1.875rem']}
      mt={['5.75rem', '9.25rem', '12.5rem']}
    >
      {links.slice(1).map((link) => (
        <CategoryLink {...link} key={link.id} />
      ))}
    </Stack>
  );
};

export default CategoriesLinks;
