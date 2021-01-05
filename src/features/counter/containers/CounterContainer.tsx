import React from 'react';
import { Provider } from 'react-redux';

// Redux
import configureStore from '../store/configureStore';

// Components
import Counter from '../components/Counter';

const CounterContainer = (): React.ReactElement => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default CounterContainer;
