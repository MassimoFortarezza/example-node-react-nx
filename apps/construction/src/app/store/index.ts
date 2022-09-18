import { configureStore } from '@reduxjs/toolkit';

import { companiesApi } from '../api/companiesApi';
import { saveSearch } from '../utils/localStorage';
import searchReducer from './SearchSlice';
import uiReducer from './UISlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    ui: uiReducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companiesApi.middleware),
});

store.subscribe(() => {
  saveSearch(store.getState().search);
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
