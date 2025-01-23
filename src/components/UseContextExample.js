import React, { createContext, useContext } from 'react';

const UserContext = createContext();

const Child = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <h3>User name from context: {name}</h3>
    </div>
  );
};

const UseContextExample = () => {
  return (
    <div className="hook-container">
      <h2>useContext Example</h2>
      <UserContext.Provider value="Venky">
        <Child />
      </UserContext.Provider>
    </div>
  );
};

export default UseContextExample;
