import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    goals: {},
  },
  reducers: {
    addGoal: (state, action) => {
      state.goals[action.payload.id] = action.payload;
      state.goals[action.payload.id].done = false;
    },
    removeGoal: (state, action) => {
      delete state.goals[action.payload];
    },
    completeGoal: (state, action) => {
      state.goals[action.payload].done = true;
    },
  },
});

export const selectGoals = (state) => state.goals.goals;

export const { addGoal, removeGoal, completeGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
