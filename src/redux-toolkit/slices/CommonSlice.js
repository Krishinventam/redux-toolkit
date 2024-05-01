import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: [],
  currentProject: { name: "New Project ", owner: "Krish Shah" },
  currentTask: { task: "New Task", priority: "Moderate" },

  reducers: {
    setProject: (state, action) => {
      state.currentProject = action.payload;
    },

    setTask: (state, action) => {
      state.currentTask = action.payload;
    },
  },
});
export const { setProject, setTask } = commonSlice.actions;
export default commonSlice.reducer;
