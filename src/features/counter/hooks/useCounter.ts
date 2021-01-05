import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { selectCounter } from '../reducers/counterReducer';
import { setIncrease, setDecrease } from '../actions/counterActions';

// Types
import type { State } from '../reducers/counterReducer';

type UseCounter = {
  counterData: State;
  handleIncrease: () => void;
  handleDecrease: () => void;
};

const useCounter = (): UseCounter => {
  const dispatch = useDispatch();
  const counterData = useSelector(selectCounter);

  // We can create handlers there or directly in components using useDispatch hook
  const handleIncrease = useCallback((): void => {
    dispatch(setIncrease());
  }, [dispatch]);

  const handleDecrease = useCallback((): void => {
    dispatch(setDecrease());
  }, [dispatch]);

  return { counterData, handleIncrease, handleDecrease };
};

export default useCounter;
