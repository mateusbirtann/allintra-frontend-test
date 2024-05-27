import { CryptoCurrencyName } from '@/components/dashboard/crypto-currency-name';

type CryptoCurrencyValues = { [key: string]: string };

export function createCryptoCurrencyTableData(
  {
    currentValues,
    percentageChange,
  }: { currentValues: CryptoCurrencyValues; percentageChange: { [key: string]: number } },
  cryptoCurrencyPairs: string[],
) {
  return cryptoCurrencyPairs.map((cryptoSymbol, index) => ({
    rank: index + 1,
    name: CryptoCurrencyName(cryptoSymbol),
    amount: currentValues[cryptoSymbol],
    percentageChange: percentageChange[cryptoSymbol],
  }));
}
