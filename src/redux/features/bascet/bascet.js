import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: [],
  total: 0,
  price: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const findItem = state.allProduct.find(
        (product) => product.id === payload.id
      );

      console.log(findItem);

      if (findItem) {
        findItem.amount = payload.amount;
      } else {
        state.allProduct = [...state.allProduct, payload];
      }
    },
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
