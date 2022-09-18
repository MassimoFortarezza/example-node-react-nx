import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const GoBackLink = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Button
      as="a"
      variant="link"
      onClick={() => navigate(-1)}
      mt={{ base: '1rem', sm: '2rem', lg: '2rem' }}
      fontSize="0.9375rem"
      textTransform="capitalize"
    >
      Go back
    </Button>
  );
};

export default GoBackLink;
