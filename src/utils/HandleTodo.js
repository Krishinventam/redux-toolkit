import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../todostate/action";

const HandleTodo = ({ todos}) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          {todo.completed ? (
            <button onClick={() => dispatch(completeTodo(todo.id))}>
              Mark Incomplete
            </button>
          ) : (
            <button onClick={() => dispatch(completeTodo(todo.id))}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HandleTodo;
