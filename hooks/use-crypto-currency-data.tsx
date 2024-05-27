import { useBinanceMultipleStream } from '@/hooks/use-binance-multiple-stream';
import { useCryptoCurrencyValue } from '@/hooks/use-crypto-currency-value';
import { CryptoCurrencyDataStreamProps } from '@/interfaces/types';

export function useCryptoCurrencyData(cryptoCurrencyPairs: string[]) {
  const { cryptoCurrencyDataStream }: { cryptoCurrencyDataStream?: CryptoCurrencyDataStreamProps } =
    useBinanceMultipleStream(cryptoCurrencyPairs);
  const { currentValues, percentageChange } = useCryptoCurrencyValue(
    cryptoCurrencyDataStream,
    cryptoCurrencyPairs,
  );

  return { currentValues, percentageChange };
}
