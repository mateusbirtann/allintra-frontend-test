import { CryptoNameMapType } from '@/interfaces/types';

export function CryptoCurrencyName(cryptoSymbol: string) {
  const cryptoNameMap: CryptoNameMapType = {
    btcusdt: {
      name: 'Bitcoin ',
      symbol: 'BTC',
      icon: <img className="h-6 w-6" src="/bitcoin-btc-logo.svg" alt="Bitcoin logo" />,
    },
    ethusdt: {
      name: 'Ethereum',
      symbol: 'ETH',
      icon: <img className="h-6 w-6" src="/ethereum-eth-logo.svg" alt="Ethereum logo" />,
    },
    solusdt: {
      name: 'Solana',
      symbol: 'SOL',
      icon: <img className="h-6 w-6" src="/solana-sol-logo.svg" alt="Solana logo" />,
    },
    dogeusdt: {
      name: 'Dogecoin',
      symbol: 'DOGE',
      icon: <img className="h-6 w-6" src="/dogecoin-doge-logo.svg" alt="Dogecoin logo" />,
    },
  };

  const crypto = cryptoNameMap[cryptoSymbol.toLowerCase()];

  return (
    <div className="flex items-center gap-2">
      {crypto.icon}
      <div className="flex flex-col text-left sm:flex-row sm:gap-2">
        <span className="text-xs font-bold sm:text-base">{crypto.name}</span>
        <span className="text-xs font-bold text-zinc-400 sm:text-base">{crypto.symbol}</span>
      </div>
    </div>
  );
}
