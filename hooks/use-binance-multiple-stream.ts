import { getSocketByCurrencyArray } from '@/websocket/binance-websocket';
import { useEffect, useState } from 'react';

export const useBinanceMultipleStream = (currencyArray: string[]) => {
  const [cryptoCurrencyDataStream, setCryptoCurrencyDataStream] = useState<any[]>([]);

  useEffect(() => {
    const socket: WebSocket = getSocketByCurrencyArray(currencyArray);
    const handleMessage = (event: MessageEvent) => {
      try {
        const cryptoCurrencyDataStream = JSON.parse(event.data);
        setCryptoCurrencyDataStream(cryptoCurrencyDataStream);
      } catch (error) {
        console.error('Failed to parse message data:', error);
      }
    };

    socket.onmessage = handleMessage;

    return () => {
      socket.onmessage = null;
      socket.close();
    };
  }, []);

  return { cryptoCurrencyDataStream };
};
