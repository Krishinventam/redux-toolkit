import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios-instance/instances";

const initialState = {
  project: [],
  loading: false,
  error: null,
};
export const fetchProject = createAsyncThunk(
  "project/fetchProject",
  async (rejectWithValue) => {
    try {
      const response = await instance.get("/project/");

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProject = createAsyncThunk(
  "project/addProject",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("/project/", data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProject = createAsyncThunk(
  "project/getProject",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/project/${id}/`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editProject = createAsyncThunk(
  "project/editProject",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/project/${newData.id}/`, newData);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async ({ id }, { rejectWithValue }) => {
    try {
      console.log('id',id);
      const response = await instance.delete(`/project/${id}/`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,

  reducers: {
    projectAdd(state, action) {
      const newproject = {
        id: state.length + 1,
        name: action.payload,
        completed: false,
      };
      state.project.push(newproject);
    },
    projectUpdate(state, action) {
      const index = state.project.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) {
        state.project[index] = action.payload;
      }
    },
    projectDelete(state, action) {
      state.project = state.project.filter(
        (project) => project.id !== action.payload.id
      );
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
        state.project = action.payload;
      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(addProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(editProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project.filter = action.payload.id;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { projectAdd, projectUpdate, projectDelete } =
  projectSlice.actions;
export default projectSlice.reducer;
