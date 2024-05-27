import { configureStore } from '@reduxjs/toolkit';
import { cryptoCurrencySlice } from './reducer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cryptoCurrency: cryptoCurrencySlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
