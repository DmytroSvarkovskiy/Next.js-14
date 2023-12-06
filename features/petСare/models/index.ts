import { TAnimalTypes, TInitialState } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';

const initialState: TInitialState = {
  sortBy: 'birds',
};

export const carePetSlice = createSlice({
  name: 'carePetSlice',
  initialState,
  reducers: {
    setSort: (state, { payload }: PayloadAction<TAnimalTypes>) => {
      state.sortBy = payload;
    },
  },
});

export const CarePetActions = carePetSlice.actions;
export const CarePeTReduser = carePetSlice.reducer;
