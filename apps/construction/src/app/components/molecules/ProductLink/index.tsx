import { Box, Button, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { OtherProductsProps } from '../../organisms/OtherProducts';

const ProductLink: React.FC<OtherProductsProps> = ({
  slug,
  name,
  image,
}): JSX.Element => {
  return (
    <Box as="li">
      <Box as="picture">
        <source media="(min-width: 62em)" srcSet={image.desktop} />
        <source media="(min-width: 48em)" srcSet={image.tablet} />
        <Image
          src={image.mobile}
          objectFit="cover"
          width="100%"
          borderRadius="0.5rem"
          alt={name}
        />
      </Box>
      <Heading
        as="h3"
        fontSize={{ base: '1.5rem' }}
        mt={{ base: '2rem' }}
        letterSpacing="0.1069rem"
      >
        {name}
      </Heading>
      <Link to={`/${slug}`}>
        <Button as="a" cursor="pointer" mt={{ base: '32px' }}>
          See Companies
        </Button>
      </Link>
    </Box>
  );
};

export default ProductLink;
