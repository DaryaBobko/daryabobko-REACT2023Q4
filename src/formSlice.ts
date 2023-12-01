import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './rootState';
import { UserForm } from './models/Form';

interface CounterState {
  value: number;
  formData: UserForm | null;
}

const initialState: CounterState = {
  value: 0,
  formData: null,
};

const formSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    submitFormData: (
      state,
      { payload }: { type: string; payload: UserForm }
    ) => {
      state.formData = payload;
    },
  },
});

export const { increment, decrement, submitFormData } = formSlice.actions;
export const selectCounterSlice = (state: RootState) => state.counter;

export const selectCount = (state: RootState) =>
  selectCounterSlice(state).value;

export const selectFormData = (state: RootState) =>
  selectCounterSlice(state).formData;

export default formSlice.reducer;
