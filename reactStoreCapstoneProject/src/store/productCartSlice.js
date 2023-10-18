import { createSlice } from "@reduxjs/toolkit";

// Products in the cart
const productCartSlice = createSlice({
  name: "productsCart",
  initialState: [],

  reducers: {
    // Add To Cart
    addToCart: (state, action) => {
      const newAddToCart = {
        description: action.payload.description,
        id: action.payload.id,
        img: action.payload.img,
        name: action.payload.name,
        price: action.payload.price,
      };
      state.push(newAddToCart);
    },

    // Delete Product
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCart, deleteProduct } = productCartSlice.actions;

export default productCartSlice.reducer;
