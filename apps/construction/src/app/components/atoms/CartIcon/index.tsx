import { Button, Center } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { totalQuantity } from '../../../store/CartSlice';
import { useModal } from '../../../store/ModalContextProvider';

const CartIcon = (): JSX.Element => {
  const { onCartModalOpen } = useModal();
  const quantity = useSelector(totalQuantity);

  return (
    <Button
      position="relative"
      bg="transparent"
      border="none"
      p="0"
      onClick={onCartModalOpen}
      aria-label="Show Cart"
      _hover={{
        bg: 'transparent',
      }}
      fontWeight="normal"
    >
      <img
        src="/images/shared/desktop/icon-cart.svg"
        width={23}
        height={21}
        aria-hidden="true"
        alt=""
      ></img>
      {!!quantity && (
        <Center
          as="span"
          p=".6rem"
          position="absolute"
          width="1rem"
          height="1rem"
          bg="accent"
          fontSize="0.8125rem"
          borderRadius="50%"
          color="white"
          top="-0.375rem"
          right="-0.75rem"
        >
          {quantity}
        </Center>
      )}
    </Button>
  );
};

export default CartIcon;
