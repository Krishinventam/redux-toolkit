import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  TODOS_START,
  TODOS_PASS,
  TODOS_FAIL,
} from "../../state/types";
import axios from "axios";

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

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch({ type: TODOS_START });
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const todos = response.data.slice(0, 3);
        dispatch({ type: TODOS_PASS, payload: todos });
      })
      .catch((error) => {
        dispatch({ type: TODOS_FAIL, payload: error.message });
      });
  };
};

// export const postTodos = () =>{
//   return (dispatch) => {
//     dispatch({ type: TODOS_START});
//     axios.post("https://jsonplaceholder.typicode.com/todos")
//     .then((res)=>{
//       const todos = res.data
//       dispatch({type: TODOS_PASS , payload:todos})
//     })
//     .catch((error) =>{
//       dispatch({type: TODOS_PASS, payload:error.message})
//     })
//   }
// }