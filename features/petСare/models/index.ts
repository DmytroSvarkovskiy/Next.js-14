import { TAnimalTypes, TInitialState } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';

const initialState: TInitialState = {
  sortBy: null,
  page: 1,
  limit: '9',
  order: 1,
  search: '',
  categories: null,
  tags: null,
  languages: '',
  visibleFilter: false,
};

export const AdvicePetSlice = createSlice({
  name: 'advicePetSlice',
  initialState,
  reducers: {
    setSort: (state, { payload }: PayloadAction<string | null>) => {
      state.sortBy = payload;
    },
    changePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
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
  },
});

export const AdvicePetActions = AdvicePetSlice.actions;
export const AdvicePeTReduser = AdvicePetSlice.reducer;
