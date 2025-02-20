// store.ts

import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers/contactReducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  // Redux DevTools should be enabled by default in development mode
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;