import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios-instance/instances";

const firststate = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchProject = createAsyncThunk(
  "project/fetchProject",
  async () => {
    const response = await instance.get("/project/");

    return response.data;
  }
);

export const postProject = createAsyncThunk("post/postProject", async () => {
  const response = await instance.post("/project/", projectSlice);

  return response.data;
});

export const getProject = createAsyncThunk('get/getProject' , async() =>{
    const response = await instance.get('/project/1/' , projectSlice)

    return response.data;
})

export const putProject = createAsyncThunk('put/putProject' , async() =>{
    const response = await instance.put('/project/1/',projectSlice)

    return response.data;
})

export const deleteProject = createAsyncThunk('delete/deleteProject' , async() =>{
const response = await instance.delete('/delete/3/',projectSlice)

return response.data;
})

const projectSlice = createSlice({
  name: "project",
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
      .addCase(fetchProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { settingProject, settingTask } = projectSlice.actions;
export default projectSlice.reducer;
