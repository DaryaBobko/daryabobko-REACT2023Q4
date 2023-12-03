import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './rootState';
import { UserForm } from './models/Form';

interface CounterState {
  formData: UserForm | null;
}

const initialState: CounterState = {
  formData: null,
};

const formSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    submitFormData: (
      state,
      { payload }: { type: string; payload: UserForm }
    ) => {
      state.formData = payload;
    },
  },
});

export const { submitFormData } = formSlice.actions;
export const selectCounterSlice = (state: RootState) => state.counter;

export const selectFormData = (state: RootState) =>
  selectCounterSlice(state).formData;

export default formSlice.reducer;
