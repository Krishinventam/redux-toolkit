import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  setLoading,
  withdrawMoney,
  depositMoney,
} from "../slices/TodoSlice";
import ToolKitHandleTodo from "../../utils/ToolkitTodoHandle";
import { fetchPosts } from "../slices/TodoSlice";
import { setTask, setProject } from "../slices/CommonSlice";

const Todo = () => {
  const { posts } = useSelector((state) => state.todos) || [];
  const { loading, project, task, } =
    useSelector((state) => state) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.todoTitle.value;
    if (title) {
      dispatch(addTodo(title));
      e.target.todoTitle.value = "";
    }
  };
  const handleLoading = () => {
    dispatch(setLoading(loading));
  };
  const handleProject = () => {
    dispatch(setProject(project));
  };
  const handleTask = () => {
    dispatch(setTask(task));
  };
  // const handleDeposit = () =>{
  //   dispatch(depositMoney(moneyDeposit))
  // }
  // const handleWithdraw = () => {
  //   dispatch(withdrawMoney(moneyWithdraw))
  // }

  const completedTodos = posts.filter((todo) => todo.completed);
  const incompleteTodos = posts.filter((todo) => !todo.completed);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="title" name="todoTitle" placeholder="Enter a new task" />
        <button type="submit"> Add Todo </button>
       

        <h3> Incomplete task</h3>
        <ul>
          <ToolKitHandleTodo posts={incompleteTodos} />
        </ul>
        <h3>Completed task</h3>
        <ul>
          <ToolKitHandleTodo posts={completedTodos} />
        </ul>
      </form>
      <button className="btn btn-primary mx-2" onClick={handleLoading}>
        +
      </button>
      Set Loading
      <button className="btn btn-primary mx-2" onClick={handleLoading}>
        -
      </button>
      <button className="btn btn-primary mx-2" onClick={handleProject}>
        +
      </button>
      Set Project
      <button className="btn btn-primary mx-2" onClick={handleProject}>
        -
      </button>
      <button className="btn btn-primary mx-2" onClick={handleTask}>
        +
      </button>
      Set Task
      <button className="btn btn-primary mx-2" onClick={handleTask}>
        -
      </button>
      {/* <button className="btn btn-primary mx-2" onClick={() => handleDeposit}>+</button>
 Update Balance
<button className="btn btn-primary mx-2"  onClick={() => handleWithdraw}>-</button> */}
    </div>
  );
};

export default Todo;
