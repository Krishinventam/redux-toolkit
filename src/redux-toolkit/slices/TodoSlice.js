import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = process.env.REACT_APP_API_URL;
console.log("URL", BASE_URL);
const laststate = {
  posts: [],
  loading: false,
  error: null,
  currentProject: { name: "New Project ", owner: "Krish Shah" },
  currentTask: { task: "New Task", priority: "Moderate" },
  moneyDeposit: null,
  moneyWithdraw: null,
};
export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await axios.get(`${BASE_URL}/todos`);
  console.log(response.data);
  return response?.data.slice(0, 3);
});

const todoSlice = createSlice({
  name: "todos",
  initialState: laststate,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };
      state.posts.push(newTodo);
    },

    completeTodo: (state, action) => {
      const todo = state.posts.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo: (state, action) => {
      const index = state.posts.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.posts.splice(index, 1);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder

      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // [fetchPosts.pending]: (state,action)=>{
      //   state.status = 'loading'
      // },
      // [fetchPosts.fulfilled]: (state, action) => {
      //   state.status = 'succeeded'
      //     state.todos = action.payload.todo;
      //   // state.todos = state.todos.concat(action.payload)
      // },
      // [fetchPosts.rejected]: (state,action) =>{
      // state.status = 'failed'
      // state.error = action.error.message
      // }
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addTodo,
  completeTodo,
  deleteTodo,
  setLoading,
  depositMoney,
  withdrawMoney,
} = todoSlice.actions;
export default todoSlice.reducer;
