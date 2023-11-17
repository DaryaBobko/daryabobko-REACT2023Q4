import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store/store';
import { ANIMAL_SEARCH_VALUE } from './constants';

interface CounterState {
  value: number;
  valueSearch: string;
}

const initialState: CounterState = {
  value: 0,
  valueSearch: localStorage.getItem(ANIMAL_SEARCH_VALUE) || '',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setInputValue: (state, { payload }: { type: string; payload: string }) => {
      state.valueSearch = payload;
    },
  },
});

export const { increment, decrement, setInputValue } = counterSlice.actions;

export const selectCounterSlice = (state: RootState) => state.counter;

export const selectCount = (state: RootState) =>
  selectCounterSlice(state).value;
export const selectSearchValue = (state: RootState) =>
  selectCounterSlice(state).valueSearch;

export default counterSlice.reducer;
