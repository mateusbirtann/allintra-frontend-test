import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CryptoState {
  firstValues: { [key: string]: string };
  currentValues: { [key: string]: string };
  percentageChange: { [key: string]: number };
}

const initialState: CryptoState = {
  firstValues: {},
  currentValues: {},
  percentageChange: {},
};

export const cryptoCurrencySlice = createSlice({
  name: 'cryptoCurrencyValue',
  initialState,
  reducers: {
    addCryptoData: (state, action: PayloadAction<{ name: string; value: string }>) => {
      // Check if this is the first value for this cryptocurrency
      if (!state.firstValues[action.payload.name]) {
        state.firstValues[action.payload.name] = action.payload.value;
      }

      // Update the current value for this cryptocurrency
      state.currentValues[action.payload.name] = action.payload.value;
    },
    calculatePercentageChange: (state) => {
      for (const key in state.currentValues) {
        const firstValue = parseFloat(state.firstValues[key]);
        const currentValue = parseFloat(state.currentValues[key]);
        const priceChangePercentage = ((currentValue - firstValue) / firstValue) * 100;
        const absolutPercentageChange = Math.abs(priceChangePercentage);
        const normalizedPercentageChange = absolutPercentageChange / 100;

        state.percentageChange[key] = normalizedPercentageChange;
      }
    },
  },
});
