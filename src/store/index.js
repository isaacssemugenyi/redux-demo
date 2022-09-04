import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productSlice from './product.slice';
const reducer = combineReducers({
  product: productSlice.reducer,
});
const store = configureStore({
  reducer,
});
export default store;
