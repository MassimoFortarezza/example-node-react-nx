import { TaSpecialities } from '@mf-cos/api-interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loadSearch } from '../utils/localStorage';
import { RootState } from '.';

export type SearchSlice = {
  inputText: string;
  specialities: TaSpecialities[];
};

const initialSearchState: SearchSlice = {
  inputText: '',
  specialities: [],
};

const persistedSearch = loadSearch();

const SearchSlice = createSlice({
  name: 'search',
  initialState: persistedSearch ? persistedSearch : initialSearchState,
  reducers: {
    saveInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    saveSpecialities: (state, action: PayloadAction<TaSpecialities[]>) => {
      state.specialities = action.payload;
    },
    clearSearch: () => {
      return initialSearchState;
    },
  },
});

export const specialitiesSelector = (state: RootState): TaSpecialities[] =>
  state.search.specialities;

export const inputTextSelector = (state: RootState): string =>
  state.search.inputText;

export const { saveSpecialities, saveInputText, clearSearch } =
  SearchSlice.actions;

export default SearchSlice.reducer;
