/**
 * Creates a WebSocket for a given array of currencies with reconnection handling.
 * @param {string[]} currencies - The currencies to create the WebSocket for.
 * @returns {WebSocket} The created WebSocket.
 * @throws {TypeError} If `currencies` is not an array of strings.
 */
export const getSocketByCurrencyArray: (currencies: string[]) => WebSocket = (
  currencies: string[],
) => {
  if (!Array.isArray(currencies) || !currencies.every((currency) => typeof currency === 'string')) {
    throw new TypeError('Currencies must be an array of strings');
  }

  const streams = currencies.map((currency) => `${currency}@ticker`).join('/');

  const connectWebSocket = (url: string) => {
    try {
      const socket = new WebSocket(url);

      socket.onopen = () => {
        console.log('WebSocket connection established');
      };

      socket.onclose = (event) => {
        console.log('WebSocket connection closed:', event.code, event.reason);
        console.log('Attempting to reconnect...');

        // Attempt to reconnect after a delay
        setTimeout(() => {
          connectWebSocket(url);
        }, 5000);
      };

      return socket;
    } catch (error) {
      console.error('Failed to create WebSocket:', error);
      throw error;
    }
  };

  try {
    // Try connecting to the primary URL
    return connectWebSocket('wss://stream.binance.com:9443/stream?streams=' + streams);
  } catch (error) {
    // If connection fails, try connecting to the backup URL
    console.log('Failed to connect to primary URL. Trying backup URL...');
    return connectWebSocket('wss://stream.binance.com:443/stream?streams=' + streams);
  }
};
