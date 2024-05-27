import { renderHook, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';
import { renderWithProviders } from '@/lib/utils-for-tests';
import { addCryptoData, calculatePercentageChange } from '@/store/actions';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { Provider } from 'react-redux';
import { makeStore } from '@/store/store';
import React from 'react';

describe('Home component', () => {
  it('Should render Dashboard component', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('updates the crypto currency state correctly', () => {
    const store = makeStore();
    const wrapper = ({ children }: React.PropsWithChildren<{}>) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useAppDispatch(), { wrapper });

    const dispatch = result.current;

    dispatch(addCryptoData({ name: 'btcusdt', value: '100' }));
    dispatch(addCryptoData({ name: 'btcusdt', value: '150' }));

    dispatch(addCryptoData({ name: 'ethusdt', value: '100' }));
    dispatch(addCryptoData({ name: 'ethusdt', value: '150' }));

    dispatch(calculatePercentageChange());

    expect(store.getState().cryptoCurrency).toEqual({
      firstValues: { btcusdt: '100', ethusdt: '100' },
      currentValues: { btcusdt: '150', ethusdt: '150' },
      percentageChange: { btcusdt: 0.5, ethusdt: 0.5 },
    });
  });
});
