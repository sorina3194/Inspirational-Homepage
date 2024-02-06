import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Containers/weatherSlice";
import quoteReducer from "../Containers/quoteSlice";
import goalReducer from "../Containers/goalsSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    quote: quoteReducer,
    goals: goalReducer,
  },
});
