// store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Redux DevTools should be enabled by default in development mode
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;