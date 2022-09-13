import { useSelector } from 'react-redux';

import { SHIPPING_FEE, TAX_RATE } from '../constants/fees';
import { totalAmount } from '../store/CartSlice';

const useCartTotals = (): {
  cartTotal: number;
  tax: number;
  grandTotal: number;
} => {
  const cartTotal = useSelector(totalAmount);
  const tax = TAX_RATE * cartTotal;
  const grandTotal = cartTotal + tax + SHIPPING_FEE;

  return {
    cartTotal,
    tax,
    grandTotal,
  };
};

export default useCartTotals;
