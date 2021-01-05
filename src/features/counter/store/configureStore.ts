import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Redux
import counterReducer from '../reducers/counterReducer';

// Types
import type { State as CounterState } from '../reducers/counterReducer';

type RootState = {
  counterReducer: CounterState;
};

const configureStore = () => {
  const rootReducer = combineReducers({
    counterReducer
  });

  const initialState = {};

  const middleware = [thunk];

  // To use Redux extension in browser
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  const composeEnhancers =
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export type { RootState };

export default configureStore;
