import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,   } from "../redux-toolkit/Slice";
import ToolKitHandleTodo from "../utils/ToolkitTodoHandle";

const Todo = () => {
  const todos = useSelector((state) => state.todos) || [];
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.todoTitle.value;
    if (title) {
      dispatch(addTodo(title));
      e.target.todoTitle.value = "";
    }
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="title" name="todoTitle" placeholder="Enter a new task" />
        <button type="submit"> Add Todo </button>
        {/* <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
              <button onClick={() => handleCompleteTodo(todo.id)}>
                {todo.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>
          
                Delete
              </button>
            </li>
          ))}
        </ul> */}
      
        <h3> Incomplete task</h3>
        <ul>
          <ToolKitHandleTodo 
          todos={incompleteTodos}
          />
        </ul>
     <h3>Completed task</h3>
     <ul>
      <ToolKitHandleTodo
      todos={completedTodos}
      />
     </ul>
      </form>

    </div>
  );
};

export default Todo;
