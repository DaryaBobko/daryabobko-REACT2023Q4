import { configureStore } from '@reduxjs/toolkit';
import animalReducer from '../animalSlice';
import { api } from '../utils/getAnimals';

export const store = configureStore({
  reducer: {
    animal: animalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
