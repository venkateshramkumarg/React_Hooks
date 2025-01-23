import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100);

  const expensiveCalculation = useMemo(() => {
    console.log('Expensive calculation happening...');
    let result = 0;
    for (let i = 0; i < number * 10000000; i++) {
      result += i;
    }
    return result;
  }, [number]);

  return (
    <div className="hook-container">
      <h2>useMemo Example</h2>
      <h3>Expensive Calculation: {expensiveCalculation}</h3>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};

export default UseMemoExample;
