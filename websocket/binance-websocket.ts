/**
 * Creates a WebSocket for a given currency.
 * @param {string} currency - The currency to create the WebSocket for.
 * @returns {WebSocket} The created WebSocket.
 * @throws {TypeError} If `currency` is not a string.
 */
export const getSocketByCurrency: (currency: string) => WebSocket = (currency: string) => {
  if (typeof currency !== 'string') {
    throw new TypeError('Currency must be a string');
  }

  try {
    return new WebSocket(`wss://stream.binance.com:9443/ws/${currency}@ticker`);
  } catch (error) {
    console.error('Failed to create WebSocket:', error);
    throw error;
  }
};

/**
 * Creates a WebSocket for a given array of currencies.
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

  try {
    return new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);
  } catch (error) {
    console.error('Failed to create WebSocket:', error);
    throw error;
  }
};
