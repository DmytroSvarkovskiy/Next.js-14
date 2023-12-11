import { TInitialState } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';

const initialState: TInitialState = {
  limit: '9',
  order: 1,
  search: '',
  categories: null,
  tags: [],
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
    toggleTags: (state, { payload }: PayloadAction<string>) => {
      if (payload) {
        if (state.tags === null) {
          state.tags = [];
        }
        const isValueInState = state.tags.includes(payload);

        if (isValueInState) {
          state.tags = state.tags.filter(item => item !== payload);
        } else {
          state.tags = [...state.tags, payload];
        }
      } else {
        state.tags = [];
      }
    },
    setLanguages: (state, { payload }: PayloadAction<string>) => {
      state.languages = payload;
    },
    setVasibleFilter: state => {
      state.visibleFilter = !state.visibleFilter;
    },
    toggleSubcategory: (state, { payload }: PayloadAction<string>) => {
      if (payload) {
        if (state.subcategory === null) {
          state.subcategory = [];
        }

        const isValueInState = state.subcategory.includes(payload);

        if (isValueInState) {
          state.subcategory = state.subcategory.filter(item => item !== payload);
        } else {
          state.subcategory = [...state.subcategory, payload];
        }
      } else {
        state.subcategory = [];
      }
    },
  },
});

export const AdvicePetActions = AdvicePetSlice.actions;
export const AdvicePeTReduser = AdvicePetSlice.reducer;
