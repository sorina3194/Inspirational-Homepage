import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "b181a5883aec4c088a6141607240102 ";
const API_URL = `https://api.weatherapi.com/v1/current.json?q=Berlin&key=${API_KEY}`;

export const loadWeatherData = createAsyncThunk(
  "weather/loadWeatherData",
  async () => {
    const response = await fetch(API_URL);
    const json = await response.json();

    return json;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
    isLoadingWeather: false,
    failedToLoadWeather: false,
  },

  extraReducers: (builder) => {
    builder.addCase(loadWeatherData.pending, (state, action) => {
      state.isLoadingWeather = true;
      state.failedToLoadWeather = false;
    });
    builder.addCase(loadWeatherData.fulfilled, (state, action) => {
      state.isLoadingWeather = false;
      state.failedToLoadWeather = false;
      state.weather = action.payload;
    });
    builder.addCase(loadWeatherData.rejected, (state, action) => {
      state.isLoadingWeather = false;
      state.failedToLoadWeather = true;
    });
  },
});

export const selectWeather = (state) => state.weather.weather;
export const selectIsLoadingWeather = (state) => state.weather.isLoadingWeather;
export default weatherSlice.reducer;
