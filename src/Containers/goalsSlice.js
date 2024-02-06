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
    removeGoal: (state, action) => {
     delete state.goals[action.payload]
    }
  },
});

export const selectGoals = (state) => state.goals.goals;

export const { addGoal , removeGoal} = goalsSlice.actions;

export default goalsSlice.reducer;
