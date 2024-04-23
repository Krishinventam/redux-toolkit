import { ADD_TODO, DELETE_TODO, COMPLETE_TODO} from '../../state/types';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: {
    id,
  },
});

