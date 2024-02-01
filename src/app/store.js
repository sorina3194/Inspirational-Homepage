import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Containers/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  }
})
