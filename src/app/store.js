import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Containers/weatherSlice";
import quoteReducer from "../Containers/quoteSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    quote: quoteReducer,
  },
});
