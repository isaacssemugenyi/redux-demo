import { createSlice } from '@reduxjs/toolkit';
// Slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    cart: [],
  },
  reducers: {
    allProducts: (state, action) => {
      state.productList = action.payload;
    },
    currentCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;

export const fetchProducts = () => async (dispatch) => {
  try {
    // Fetch all products
    await fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => dispatch(productActions.allProducts(data)))
      .catch((err) => console.error(err));
  } catch (e) {
    return console.error(e.message);
  }
};
// export const logout = () => async (dispatch) => {
//   try {
//     // const res = await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess());
//   } catch (e) {
//     return console.error(e.message);
//   }
// };
