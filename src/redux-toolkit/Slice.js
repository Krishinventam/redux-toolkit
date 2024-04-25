import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.initialState,
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    completeTodo: (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      deleteTodo: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  
  
});

export const { addTodo ,completeTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;

