import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateState = (newState) => {
    setState(newState);
  };

  return (
    <Context.Provider value={{ state, updateState }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
