import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
type RootState = ReturnType<typeof appStore.getState>;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
export default appStore;
