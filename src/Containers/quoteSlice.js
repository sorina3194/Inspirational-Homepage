import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.quotable.io/random";

export const loadQuoteData = createAsyncThunk(
  "quote/loadQuoteData",
  async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: {
      content: "Love is the only force capable of transforming an enemy into a friend.",
      author: "Martin Luther King Jr."
    },
    isLoadingQuote: false,
    failedToLoadQuote: false,
  },
  extraReducers: (builder) => {
    builder.addCase(loadQuoteData.pending, (state, action) => {
      state.isLoadingQuote = true;
      state.failedToLoadQuote = false;
    });
    builder.addCase(loadQuoteData.fulfilled, (state, action) => {
      state.isLoadingQuote = false;
      state.failedToLoadQuote = false;
      state.quote = action.payload;
    });
    builder.addCase(loadQuoteData.rejected, (state, action) => {
      state.isLoadingQuote = false;
      state.failedToLoadQuote = true;
    });
  },
});

export const selectQuote = (state) => state.quote.quote;
export const selectIsLoadingQuote = (state) => state.quote.isLoadingQuote;
export default quoteSlice.reducer;
