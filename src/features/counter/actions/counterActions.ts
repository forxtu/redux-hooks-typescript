import { INCREASE, DECREASE } from '../messages/counterMessages';

// Types
import type * as TYPES from '../types/counterTypes';

// Action types
type SetIncrease = {
  type: TYPES.INCREASE;
};

type SetDecrease = {
  type: TYPES.DECREASE;
};

type CounterActions = SetIncrease | SetDecrease;

// Actions
const setIncrease = (): SetIncrease => ({
  type: INCREASE
});

const setDecrease = (): SetDecrease => ({
  type: DECREASE
});

export type { CounterActions };

export { setIncrease, setDecrease };
