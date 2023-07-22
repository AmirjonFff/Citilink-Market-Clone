import { configureStore } from "@reduxjs/toolkit";
// import { subcategoriesApi } from "../api/subcategories";
// import { brandsApi } from "../api/brands";
import { productsApi } from "../api/product";
import { categoriesApi } from "../api/categories";
import basket from "../reducers/basket";

export const store = configureStore({
  reducer: {
    basket,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    // [subcategoriesApi.reducerPath]: subcategoriesApi.reducer,
    // [brandsApi.reducerPath]: brandsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      // subcategoriesApi.middleware,
      // brandsApi.middleware,
      productsApi.middleware
    ),
});
