import axiosApi from '../../axiosApi.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Dishes} from '../../types';

export const postDish = createAsyncThunk<void, Dishes>(
  'dishes/postDish', async (dish) => {
    await axiosApi.post('/dishes.json', dish);
  }
);