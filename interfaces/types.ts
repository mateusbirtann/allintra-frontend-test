export type CryptoCurrencyDataStreamProps = {
  stream: string;
  data: {
    e: string;
    E: number;
    s: string;
    p: string;
    P: string;
    w: string;
    x: string;
    c: string;
    Q: string;
    b: string;
    B: string;
    a: string;
    A: string;
    o: string;
    h: string;
    l: string;
    v: string;
    q: string;
    O: number;
    C: number;
    F: number;
    L: number;
    n: number;
  };
};

export type CryptoCurrencyColumnData = {
  rank: number;
  name: JSX.Element;
  amount: string | number | JSX.Element;
  percentageChange: number;
};

export type CryptoNameMapType = {
  [key: string]: {
    name: string;
    symbol: string;
    icon: JSX.Element;
  };
};
