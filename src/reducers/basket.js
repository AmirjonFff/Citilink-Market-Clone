import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "basket",
  initialState: {
    products: [],
    total: 0,
    perBasket: null,
  },
  reducers: {
    addProduct: (state, action) => {
      if (state.products.find((el) => el.product.id === action.payload.id)) {
        state.products = state.products.map((elem) => {
          if (elem.product.id === action.payload.id) {
            elem.quantity++;
          }
          return elem;
        });
        state.total = state.products.reduce((acc, curr) => {
          return acc + curr.quantity * curr.product.price;
        }, 0);
        return;
      }

      state.products.push({
        product: action.payload,
        quantity: 1,
      });
      state.total = state.products.reduce((acc, curr) => {
        return acc + curr.quantity * curr.product.price;
      }, 0);
    },
    incrementProduct: (state, action) => {
      console.log(action.payload);

      state.products = state.products.map((elem) => {
        if (elem.product.id === action.payload) {
          elem.quantity++;
        }
        return elem;
      });
      state.total = state.products.reduce((acc, curr) => {
        return acc + curr.quantity * curr.product.price;
      }, 0);
    },
    decrementProduct: (state, action) => {
      console.log(action.payload);
      state.products = state.products.map((elem) => {
        if (elem.product.id === action.payload) {
          elem.quantity--;
        }
        return elem;
      });
      state.total = state.products.reduce((acc, curr) => {
        return acc + curr.quantity * curr.product.price;
      }, 0);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((elem) => {
        return elem.product.id !== action.payload;
      });
      state.total = state.products.reduce((acc, curr) => {
        return acc + curr.quantity * curr.product.price;
      }, 0);
    },
    addPerBasket: (state, action) => { 
      state.perBasket = action.payload;
    }
  },
});

export const { addProduct, decrementProduct, deleteProduct, incrementProduct, addPerBasket } =
  slice.actions;

export default slice.reducer;