import {configureStore} from '@reduxjs/toolkit';
import {dishReducers} from '../containers/dishesSlice/dishesSlice.ts';

export const store = configureStore({
  reducer: {
    dishes: dishReducers
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;