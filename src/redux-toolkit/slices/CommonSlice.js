import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../axios-instance/instances";

const BASE_URL = process.env.REACT_APP_API;
const firststate = {
  tasks: [],
  loading: false,
  error: null,
  currentProject: { name: "New Project ", owner: "Krish Shah" },
  currentTask: { task: "New Task", priority: "Moderate" },
};
export const fetchTasks = createAsyncThunk(
  "common/fetchTasks",
  async (rejectWithValue) => {
    try {
      const response = await axios.get(`${BASE_URL}/todos`);
// const response = await instance.get('/teck/')
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const commonSlice = createSlice({
  name: "common",
  initialState: firststate,

  reducers: {
    setProject: (state, action) => {
      state.currentProject = action.payload;
    },

    setTask: (state, action) => {
      state.currentTask = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setProject, setTask } = commonSlice.actions;
export default commonSlice.reducer;
