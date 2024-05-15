import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios-instance/instances";

const firststate = {
  technology: [],
  loading: false,
  error: null,
};
export const fetchTechnology = createAsyncThunk(
  "technology/fetchTechnology",
  async (rejectWithValue) => {
    try {
      const response = await instance.get("/teck/");

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTechnology = createAsyncThunk(
  "technology/addTechnology",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("/teck/", data);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTechnology = createAsyncThunk(
  "technology/getTechnology",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/teck/${id}/`);
      // console.log("response", response);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTechnology = createAsyncThunk(
  "technology/editTechnology",
  async (newData, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/teck/${newData.id}/`, newData);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTechnology = createAsyncThunk(
  "technology/deleteTechnology",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`teck/${id}/`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const technologySlice = createSlice({
  name: "technology",
  initialState: firststate,

  reducers: {
    technologyAdd(state, action) {
      const newtechnology = {
        id: state.length + 1,
        name: action.payload,
        completed: false,
      };
      state.technology.push(newtechnology);
    },
    technologyUpdate(state, action) {
      const index = state.technology.findIndex(
        (technology) => technology.id === action.payload.id
      );
      if (index !== -1) {
        state.technology[index] = action.payload;
      }
    },
    technologyDelete(state, action) {
      state.technology = state.technology.filter(
        (technology) => technology.id !== action.payload.id
      );
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
        state.technology = action.payload;
      })
      .addCase(fetchTechnology.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTechnology.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTechnology.fulfilled, (state, action) => {
        state.loading = false;
        state.technology = action.payload;
      })
      .addCase(addTechnology.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editTechnology.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editTechnology.fulfilled, (state, action) => {
        state.loading = false;
        state.technology = action.payload;
      })
      .addCase(editTechnology.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTechnology.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTechnology.fulfilled, (state, action) => {
        state.loading = false;
        state.technology.filter = action.payload.id;
      })
      .addCase(deleteTechnology.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { technologyAdd, technologyUpdate, technologyDelete } =
  technologySlice.actions;
export default technologySlice.reducer;
