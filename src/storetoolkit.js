import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redux-toolkit/Slice'

const store = configureStore({
 reducer: {
 todos: todoReducer,
 },
});

export default store;