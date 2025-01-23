import React, { useReducer } from 'react';

const initialState = {
  cartItems: [
    {id: 1, name: 'apple', price: 20, quantity: 0},
    {id: 2, name: 'orange', price: 30, quantity: 0},
    {id: 3, name: 'banana', price: 40, quantity: 0},
    {id: 4, name: 'grapes', price: 50, quantity: 0}
  ],
  totalQuantity: 0,
  totalPrice: 0
};

const ACTION = {
  REMOVE_ITEM: 'remove_item',
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

const reducer = (state, action) => {
  // ...existing reducer logic...
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRemoveItem = (id) => {
    dispatch({ type: ACTION.REMOVE_ITEM, payload: { id } });
  };

  const handleIncrement = (id) => {
    dispatch({ type: ACTION.INCREMENT, payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: ACTION.DECREMENT, payload: { id } });
  };

  return (
    <div className="hook-container">
      <h2>useReducer Example</h2>
      <h3>Total Quantity: {state.totalQuantity}</h3>
      <h3>Total Price: ${state.totalPrice}</h3>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerExample;
