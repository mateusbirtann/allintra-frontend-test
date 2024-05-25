import { getSocketByCurrencyArray } from '@/websocket/binance-websocket';
import { useEffect, useState } from 'react';

export const useBinanceMultipleStream = (currencyArray: string[]) => {
  const [currencyData, setData] = useState<any[]>([]);
  const socket: WebSocket = getSocketByCurrencyArray(currencyArray);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const currencyData = JSON.parse(event.data);
        setData(currencyData);
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

  return { currencyData };
};
