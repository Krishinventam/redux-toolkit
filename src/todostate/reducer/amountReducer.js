import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  TODOS_START,
  TODOS_PASS,
  TODOS_FAIL,
} from "../../state/types";

const startState = {
  todos: [],
  loading:false,
  error:null
};

export const todosReducer = (state = startState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
case TODOS_START:
  return{
    ...state,loading:true,error:null
  }

  case TODOS_PASS:
    return{
      ...state ,loading:false,todos: action.payload 
    }

    case TODOS_FAIL:
      return{
        ...state ,loading:false,error: action.payload 
      }

    default:
      return state;
  }
};
