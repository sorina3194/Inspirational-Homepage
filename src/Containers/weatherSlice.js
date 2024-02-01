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
    weather: {
      location: {
        name: "Berlin",
        region: "Berlin",
        country: "Germany",
        lat: 52.52,
        lon: 13.4,
        tz_id: "Europe/Berlin",
        localtime_epoch: 1706797528,
        localtime: "2024-02-01 15:25",
      },
      current: {
        last_updated_epoch: 1706796900,
        last_updated: "2024-02-01 15:15",
        temp_c: 8.0,
        temp_f: 46.4,
        is_day: 1,
        condition: {
          text: "Partly cloudy",
          icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          code: 1003,
        },
        wind_mph: 23.0,
        wind_kph: 37.1,
        wind_degree: 290,
        wind_dir: "WNW",
        pressure_mb: 1024.0,
        pressure_in: 30.24,
        precip_mm: 0.0,
        precip_in: 0.0,
        humidity: 61,
        cloud: 75,
        feelslike_c: 4.5,
        feelslike_f: 40.1,
        vis_km: 10.0,
        vis_miles: 6.0,
        uv: 3.0,
        gust_mph: 27.5,
        gust_kph: 44.3,
      },
    },
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
