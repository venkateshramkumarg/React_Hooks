import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, children }) => {
  console.log(`Button rendered: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="hook-container">
      <h2>useCallback Example</h2>
      <h3>Count: {count}</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default UseCallbackExample;
