import { createSlice } from "@reduxjs/toolkit";

// Products being sold
const productSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: "1",
      name: "Spoon",
      description: "Wooden Spoon made from the finest oak",
      price: 1,
      img: "https://m.media-amazon.com/images/I/61moD4yrLOL.jpg",
    },
    {
      id: "2",
      name: "Fork",
      description: "Metal Fork 100% stainless steel",
      price: 1,
      img: "https://m.media-amazon.com/images/I/61z0LVrrowL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: "3",
      name: "Knife",
      description: "Plastic Knife 100% germ free",
      price: 1,
      img: "https://www.beaucare.com/storage/uploads/images/1291/product-hero_plastic_knife_-_white_-_pack_of_1000.jpg",
    },
    {
      id: "4",
      name: "Spork",
      description: "Metal Spork made from titanium",
      price: 1,
      img: "https://m.media-amazon.com/images/I/81H7YgQZjiL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: "5",
      name: "Plate",
      description: "Plastic Plate, totally unbreakable",
      price: 2,
      img: "https://raven.contrado.app/resources/images/2017-12/75876/melamine-plastic-plate-design-reverse-side-208618_l.jpg",
    },
    {
      id: "6",
      name: "Cup",
      description: "Clay Cup made by hand",
      price: 2,
      img: "https://www.minimax.com.au/cdn/shop/products/dwell-340ml-clay-mug-985663.jpg?v=1631892087",
    },
    {
      id: "7",
      name: "Bowl",
      description: "Wooden Bowl made from pine",
      price: 2,
      img: "https://www.ikea.com/gb/en/images/products/blanda-matt-serving-bowl-bamboo__0711988_pe728640_s5.jpg",
    },
    {
      id: "8",
      name: "Mug",
      description: "Metal Mug with 5 year guarantee",
      price: 3,
      img: "https://m.media-amazon.com/images/I/61SJPoBcisL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: "9",
      name: "Ladle",
      description: "Metal Ladle, can handle any heat",
      price: 4,
      img: "https://m.media-amazon.com/images/I/61nM4lieuzL.jpg",
    },
    {
      id: "10",
      name: "Glass",
      description: "Crystal Glass that's dishwasher safe",
      price: 5,
      img: "https://api-prod.royaldesign.se/api/products/image/6/koziol-crystal-glass-l-0",
    },
  ],

  reducers: {
    // Delete Todo
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { deleteProduct } = productSlice.actions;

export default productSlice.reducer;
