import React from 'react';

// Hooks
import useCounter from '../../hooks/useCounter';

const Counter = (): React.ReactElement => {
  // We can reuse it in any component simple as that without connect,
  // mapStateToProps and mapDispatchToProps
  const { counterData, handleIncrease, handleDecrease } = useCounter();

  return (
    <div>
      <button onClick={handleIncrease}>INCREASE</button>
      <h1>{counterData.counter}</h1>
      <button onClick={handleDecrease}>DECREASE</button>
    </div>
  );
};

export default Counter;
