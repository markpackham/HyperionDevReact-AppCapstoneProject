import { createSlice } from "@reduxjs/toolkit";

// Products in the cart
const productCartSlice = createSlice({
  name: "productsCart",
  initialState: [
    {
      id: "11",
      name: "Glass",
      description: "Crystal Glass that's dishwasher safe",
      price: 5,
      img: "https://api-prod.royaldesign.se/api/products/image/6/koziol-crystal-glass-l-0",
    },
  ],

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
