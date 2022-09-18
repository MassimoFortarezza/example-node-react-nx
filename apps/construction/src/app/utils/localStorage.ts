import { SearchSlice } from '../store/SearchSlice';

export const loadSearch = (): SearchSlice | undefined => {
  try {
    const serializedSearch = localStorage.getItem('search');
    if (serializedSearch === null) {
      return undefined;
    }
    return JSON.parse(serializedSearch);
  } catch (err) {
    return undefined;
  }
};

export const saveSearch = (search: SearchSlice): void => {
  try {
    const serializedSearch = JSON.stringify(search);
    localStorage.setItem('search', serializedSearch);
  } catch (err) {
    console.log('error while saving search to local storage', err);
  }
};
