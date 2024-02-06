import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    goals: {},
  },
  reducers: {
    addGoal: (state, action) => {
      state.goals[action.payload.id] = action.payload;
    },
  },
});

export const selectGoals = (state) => state.goals.goals;

export const { addGoal } = goalsSlice.actions;

export default goalsSlice.reducer;


