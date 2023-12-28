import {createSlice} from '@reduxjs/toolkit';
import {Dishes} from '../../types';
import {postDish} from './dishesThunks.ts';
import {RootState} from '../../app/store.ts';

interface ContactsState {
  dish: Dishes[];
  postDish: boolean,
}

const initialState: ContactsState = {
  dish: [],
  postDish: false,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(postDish.pending, (state) => {
      state.postDish = true;
    });
    builder.addCase(postDish.fulfilled, (state) => {
      state.postDish = false;
    });
    builder.addCase(postDish.rejected, (state) => {
      state.postDish = false;
    });
  }
});

export const dishReducers = dishesSlice.reducer;
export const postOneDish = (state:RootState) => state.dishes.postDish;