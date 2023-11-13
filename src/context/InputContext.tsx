import { createContext } from 'react';

export type InputContextType = {
  value: string;
  setValue: (newValue: string) => void;
};

const InputContext = createContext<InputContextType | undefined>(undefined);

export default InputContext;
