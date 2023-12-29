import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiDishes, DishesPost, GetDishesDetails} from '../../types';
import {deleteOneDish, fetchOneDish, getAllDish, postDish, updateDishParam} from './dishesThunks.ts';
import {RootState} from '../../app/store.ts';

interface ContactsState {
  dish: DishesPost[];
  dishes: GetDishesDetails[],
  dishOne: ApiDishes | null,
  postDish: boolean,
  getAllDish: boolean,
  updataLoadingParam: boolean,
  fetchOneLoading: boolean,
  deleteOneDish: boolean,
}

const initialState: ContactsState = {
  dish: [],
  dishes: [],
  dishOne:  null,
  postDish: false,
  getAllDish: false,
  updataLoadingParam: false,
  fetchOneLoading: false,
  deleteOneDish: false,
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
    builder.addCase(getAllDish.pending, (state) => {
      state.getAllDish = true;
    });
    builder.addCase(getAllDish.fulfilled, (state, {payload: dishes}: PayloadAction<GetDishesDetails[]>) => {
      state.getAllDish = false;
      state.dishes = dishes;
    });
    builder.addCase(getAllDish.rejected, (state) => {
      state.getAllDish = false;
    });
    builder.addCase(deleteOneDish.pending, (state) => {
      state.deleteOneDish = true;
    });
    builder.addCase(deleteOneDish.fulfilled, (state) => {
      state.deleteOneDish = false;
    });
    builder.addCase(deleteOneDish.rejected, (state) => {
      state.deleteOneDish = false;
    });

    builder.addCase(updateDishParam.pending, (state) => {
      state.updataLoadingParam = true;
    });
    builder.addCase(updateDishParam.fulfilled, (state) => {
      state.updataLoadingParam = false;
    });
    builder.addCase(updateDishParam.rejected, (state) => {
      state.updataLoadingParam = false;
    });


    builder.addCase(fetchOneDish.pending, (state) => {
      state.fetchOneLoading = true;
    });
    builder.addCase(fetchOneDish.fulfilled, (state, {payload: dishOne}: PayloadAction<ApiDishes>) => {
      state.fetchOneLoading = false;
      state.dishOne = dishOne;
    });
    builder.addCase(fetchOneDish.rejected, (state) => {
      state.fetchOneLoading = false;
    });
  }
});

export const dishReducers = dishesSlice.reducer;
export const postOneDish = (state:RootState) => state.dishes.postDish;
export const getAllDishes = (state:RootState) => state.dishes.dishes;
export const getOneDish = (state:RootState) => state.dishes.dishOne;
export const fetchLoadingOneDish= (state: RootState) => state.dishes.fetchOneLoading;
export const loadingOfAllDishes = (state:RootState) => state.dishes.getAllDish;
export const updatesDishParametrs = (state: RootState) => state.dishes.updataLoadingParam;
export const deleteFetchingOneDish = (state:RootState) => state.dishes.deleteOneDish;