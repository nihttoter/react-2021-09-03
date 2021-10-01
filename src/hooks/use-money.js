import { useContext } from 'react';
import moneyContext from '../contexts/money';

export function useMoney() {
  const { m } = useContext(moneyContext);
  return m;
}
