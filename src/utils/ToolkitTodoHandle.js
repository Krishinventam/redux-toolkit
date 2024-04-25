import React from "react";
import { useDispatch } from "react-redux";
import {  completeTodo, deleteTodo } from "../redux-toolkit/Slice";

const ToolKitHandleTodo = ({ todos}) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
       {todo.title} 
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
         
            <button onClick={() => dispatch(completeTodo(todo.id))}>
            {todo.completed ? 
             "Mark Incomplete" : "Complete"
            }
            </button>
        
        </li>
      ))}
    </ul>
  );
};

export default ToolKitHandleTodo;
