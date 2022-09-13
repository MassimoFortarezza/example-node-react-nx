import { IconButton } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { isNavOpen, toggleNav } from '../../../store/UISlice';

const MenuIcon = (): JSX.Element => {
  const navOpen = useSelector(isNavOpen);
  const dispatch = useDispatch();

  return (
    <IconButton
      aria-label={navOpen ? 'Close Menu' : 'Open Menu'}
      aria-expanded={navOpen ? 'true' : 'false'}
      mr={{ sm: '2.625rem', lg: 0 }}
      variant="unstyled"
      isRound={true}
      aria-haspopup="true"
      lineHeight={0}
      onClick={() => dispatch(toggleNav())}
      display={{ base: 'auto', lg: 'none' }}
      icon={
        navOpen ? (
          <img
            src="/images/shared/tablet/icon-close-menu.svg"
            width={16}
            height={15}
            aria-hidden="true"
            alt=""
          />
        ) : (
          <img
            src="/images/shared/tablet/icon-hamburger.svg"
            width={16}
            height={15}
            aria-hidden="true"
            alt=""
          />
        )
      }
    />
  );
};

export default MenuIcon;
