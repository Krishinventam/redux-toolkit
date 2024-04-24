import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from '../../todostate/action';
// import { fetchTodos } from '../../todostate/action/fetchtodo';
import HandleTodo from '../../utils/HandleTodo';

const TodoList = () => {
  const todos = useSelector(state => state.startState.todos) || [];
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.todoText.value;
    if (text) {
      dispatch(addTodo(text));
      e.target.todoText.value = '';
    }
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoText" placeholder="Enter a new task" />
        <button type="submit">Add Task</button>
      </form>

      <h3>Incomplete Tasks List</h3>
      <ul>
        <HandleTodo 
        todos={incompleteTodos}
        />
        {/* {incompleteTodos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            <button onClick={() => dispatch(completeTodo(todo.id))}>Complete</button>
          </li> */}
        {/* ))} */}
      </ul>

      <h3>Completed Tasks List</h3>
      <ul>
        {/* {completedTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: 'line-through' }}>
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            <button onClick={() => dispatch(completeTodo(todo.id))}>Mark Incomplete</button>
          </li>
        ))} */}
        <HandleTodo 
        todos={completedTodos}
        />
      </ul>
    </div>
  );
};

export default TodoList;
