import { useEffect } from 'react';
import { CryptoCurrencyDataStreamProps } from '@/interfaces/types';
import { addCryptoData, calculatePercentageChange } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';

export const useCryptoCurrencyValue = (
  currencyData: CryptoCurrencyDataStreamProps | undefined,
  cryptoSymbols: string[],
) => {
  const dispatch = useAppDispatch();

  const addCryptoDataToStore = async () => {
    cryptoSymbols.forEach((cryptoSymbol) => {
      try {
        if (currencyData && currencyData.stream && currencyData.stream.includes(cryptoSymbol)) {
          const value = currencyData.data.c;
          dispatch(addCryptoData({ name: cryptoSymbol, value }));
        }
      } catch (error) {
        console.error(error);
      }
    });
    dispatch(calculatePercentageChange());
  };

  useEffect(() => {
    addCryptoDataToStore();
  }, [currencyData, cryptoSymbols, dispatch]);

  const currentValues = useAppSelector((state) => state.cryptoCurrency.currentValues);
  const percentageChange = useAppSelector((state) => state.cryptoCurrency.percentageChange);

  return { currentValues, percentageChange };
};
