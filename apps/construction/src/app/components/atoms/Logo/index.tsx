import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = (): JSX.Element => {
  return (
    <Box mr={{ sm: 'auto', lg: 0 }} lineHeight="0">
      <Link to="/">
        <img
          style={{ marginTop: -20 }}
          src="/assets/images/shared/desktop/logo.png"
          height={25}
          width={124}
          alt="BuildConnect logo - Home"
        />
      </Link>
    </Box>
  );
};

export default Logo;
