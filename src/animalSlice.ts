import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store/store';
import { ANIMAL_SEARCH_VALUE } from './constants';
import { Animal } from './models/AnimalSearchResult';

interface AnimalState {
  valueSearch: string;
  showError: boolean;
  originalList: Animal[];
  filteredList: Animal[];
  loading: boolean;
}

const initialState: AnimalState = {
  valueSearch: localStorage.getItem(ANIMAL_SEARCH_VALUE) || '',
  showError: false,
  originalList: [],
  filteredList: [],
  loading: true,
};

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setShowError: (state) => {
      state.showError = !state.showError;
    },
    setLoading: (state, { payload }: { type: string; payload: boolean }) => {
      state.loading = payload;
    },
    setSearch: (state, { payload }: { type: string; payload: string }) => {
      state.valueSearch = payload;
    },
    calculateFilteredList: (state) => {
      const filteredAnimals = state.originalList.filter((animal) =>
        JSON.stringify(animal)
          .toLowerCase()
          .includes(state.valueSearch.toLowerCase())
      );

      state.filteredList = filteredAnimals;
    },
    setOriginalList: (
      state,
      { payload }: { type: string; payload: Animal[] }
    ) => {
      state.originalList = payload;
    },
  },
});

export const {
  setShowError,
  setLoading,
  setSearch,
  calculateFilteredList,
  setOriginalList,
} = animalSlice.actions;

export const selectAnimalSlice = (state: RootState) => state.animal;

export const selectSearchValue = (state: RootState) =>
  selectAnimalSlice(state).valueSearch;

export const showError = (state: RootState) =>
  selectAnimalSlice(state).showError;

export const selectFilteredList = (state: RootState) =>
  selectAnimalSlice(state).filteredList;

export const selectOriginalList = (state: RootState) =>
  selectAnimalSlice(state).originalList;

export const showLoading = (state: RootState) =>
  selectAnimalSlice(state).loading;

export default animalSlice.reducer;
