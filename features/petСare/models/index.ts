import { TInitialState } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';

const initialState: TInitialState = {
  limit: '9',
  order: 1,
  search: '',
  categories: null,
  tags: null,
  languages: '',
  visibleFilter: false,
  subcategory: [],
};

export const AdvicePetSlice = createSlice({
  name: 'advicePetSlice',
  initialState,
  reducers: {
    changeOrder: (state, { payload }: PayloadAction<number>) => {
      state.order = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setCategory: (state, { payload }: PayloadAction<string | null>) => {
      state.categories = payload;
    },
    setTags: (state, { payload }: PayloadAction<string[] | null>) => {
      state.tags = payload;
    },
    setLanguages: (state, { payload }: PayloadAction<string>) => {
      state.languages = payload;
    },
    setVasibleFilter: state => {
      state.visibleFilter = !state.visibleFilter;
    },
    toggleSubcategory: (state, { payload }: PayloadAction<string>) => {
      const isValueInState = state.subcategory.includes(payload);
      if (payload) {
        if (isValueInState) {
          state.subcategory.filter(item => item !== payload);
        } else {
          state.subcategory = [...state.subcategory, payload];
        }
      } else state.subcategory = [];
    },
  },
});

export const AdvicePetActions = AdvicePetSlice.actions;
export const AdvicePeTReduser = AdvicePetSlice.reducer;
