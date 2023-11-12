import React, { useState } from 'react';
import InputContext, { InputContextType } from './InputContext';
import { ANIMAL_SEARCH_VALUE } from '../constants';

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  const [value, setValue1] = useState(
    localStorage.getItem(ANIMAL_SEARCH_VALUE) || ''
  );

  const setValue = (newValue: string) => {
    setValue1(newValue);
  };

  const contextValue: InputContextType = {
    value,
    setValue,
  };

  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
};

export default Provider;
