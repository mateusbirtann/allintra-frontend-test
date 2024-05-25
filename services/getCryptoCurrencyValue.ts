import { CryptoCurrencyData } from '@/interfaces/types';

let lastValidCurrencyValues: { [cryptoSymbol: string]: string } = {};

export const getCryptoCurrencyValue = (currencyData: CryptoCurrencyData, cryptoSymbol: string) => {
  try {
    if (currencyData && currencyData.stream && currencyData.stream.includes(cryptoSymbol)) {
      lastValidCurrencyValues[cryptoSymbol] = currencyData.data.c;
    }
  } catch (error) {
    console.error(`Error getting value for ${cryptoSymbol}:`, error);
  }
  return lastValidCurrencyValues[cryptoSymbol] || 'Loading Value';
};
