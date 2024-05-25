import { getSocketByCurrency } from '@/websocket/binance-websocket';
import { useEffect, useState } from 'react';

export const useBinanceSingleStream = (currency: string) => {
  const [cryptoCurrencyDataStream, setCryptoCurrencyDataStream] = useState<any[]>([]);

  useEffect(() => {
    const socket: WebSocket = getSocketByCurrency(currency);
    socket.onmessage = (event: MessageEvent) => {
      const dataStream = JSON.parse(event.data);
      setCryptoCurrencyDataStream(dataStream);
    };

    return () => {
      socket.onmessage = null;
      socket.close();
    };
  }, []);

  return { cryptoCurrencyDataStream };
};
