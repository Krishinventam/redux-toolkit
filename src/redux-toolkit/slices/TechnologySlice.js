import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios-instance/instances";

const firststate = {
  posts: [],
  loading: false,
  error: null,
  currentProject: { name: "New Project ", owner: "Krish Shah" },
  currentTask: { task: "New Task", priority: "Moderate" },
};
export const fetchTechnology = createAsyncThunk(
  "technology/fetchTechnology",
  async () => {
    const response = await instance.get("/teck/");

    return response.data;
  }
);

export const postTechnology = createAsyncThunk(
  "posts/fetchTechnology",
  async () => {
    const response = await instance.post("/teck/", technologySlice);

    return response.data;
  }
);

export const getTechnology = createAsyncThunk(
  "get/id/fetchTechnology",
  async () => {
    const response = await instance.get("/teck/3/", technologySlice);

    return response.data;
  }
);

export const putTechnology = createAsyncThunk(
  "put/fetchTechnology",
  async () => {
    const response = await instance.put("/teck/3/", technologySlice);

    return response.data;
  }
);

export const deleteTechnology = createAsyncThunk(
  "delete/fetchTechnology",
  async () => {
    const response = await instance.delete("/teck/1/", technologySlice);

    return response.data;
  }
);

const technologySlice = createSlice({
  name: "technology",
  initialState: firststate,

  reducers: {
    settingProject: (state, action) => {
      state.Project = action.payload;
    },

    settingTask: (state, action) => {
      state.Task = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTechnology.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTechnology.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchTechnology.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { settingProject, settingTask } = technologySlice.actions;
export default technologySlice.reducer;
