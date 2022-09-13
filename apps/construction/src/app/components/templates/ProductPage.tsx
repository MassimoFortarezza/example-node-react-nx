import { Container } from '@chakra-ui/react';

import { Product } from '../../models/Product';
import GoBackLink from '../atoms/GoBackLink';
import ProductDetails from '../organisms/ProductDetails';

const ProductPage: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <Container maxW="container.lg" px={6} as="main" id="main">
      <GoBackLink />
      <ProductDetails product={product} />
    </Container>
  );
};

export default ProductPage;
