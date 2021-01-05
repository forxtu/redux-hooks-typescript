import { createSelector } from 'reselect';

// Utils
import { INCREASE, DECREASE } from '../messages/counterMessages';

// Types
import type { RootState } from '../store/configureStore';
import type { CounterActions } from '../actions/counterActions';

type State = {
  counter: number;
};

const initialState: State = {
  counter: 0
};

const counterReducer = (
  state: State = initialState,
  action: CounterActions
): State => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

// Selectors
// reselect is a cool lib to memoize selectors
// https://github.com/reduxjs/reselect
export const selectCounter = createSelector(
  (state: RootState): State => state.counterReducer,
  (counterReducer: State): State => counterReducer
);

export type { State };

export default counterReducer;
