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
});

export default productCartSlice.reducer;
