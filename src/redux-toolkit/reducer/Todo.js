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
import { setTask, setProject, fetchTasks } from "../slices/CommonSlice";
import { deleteTechnology, fetchTechnology, getTechnology, postTechnology, putTechnology } from "../slices/TechnologySlice";
import { deleteProject, fetchProject, getProject, postProject, putProject } from "../slices/ProjectSlice";

// import { getExampleThunk } from "../slices/NewSlice";

const Todo = () => {
  const { posts } = useSelector((state) => state.todos) || [];
  const { loading, project, task, } =
    useSelector((state) => state) || [];
    // const {tasks} = useSelector((state)=>state.posts) || []
    const {tasks} = useSelector((state)=>state.common) || []
    console.log('tasks', tasks);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

//   useEffect(()=>{
//     dispatch(fetchTechnology())
//   },[])

//   useEffect(()=>{
//     dispatch(postTechnology())
//   },[])
  
// useEffect(()=>{
//   dispatch(getTechnology())
// },[])

//   useEffect(()=>{
//     dispatch(putTechnology())
//   },[])

//   useEffect(()=>{
//     dispatch(deleteTechnology())
//   },[])

//   useEffect(()=>{
//     dispatch(fetchProject())
//   },[])

//   useEffect(() =>{
//     dispatch(postProject())
//   },[])

//   useEffect(() =>{
//     dispatch(getProject())
//   },[])

//   useEffect(() =>{
//     dispatch(putProject())
//   },[])

//   useEffect(() =>{
//     dispatch(deleteProject())
//   },[])
  // useEffect(()=>{
  //   dispatch(getExampleThunk());
  // },[])

  useEffect(() =>{
    dispatch(fetchTasks())
  },[])

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
  // const handleHandle = () =>{
  //     dispatch(settingProject(tasks))
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
{/* 
      <button className="btn btn-primary mx-2" onClick={handleHandle}>
        +
      </button>
      Set Task
      <button className="btn btn-primary mx-2" onClick={handleHandle}>
        -
      </button> */}
      {/* <button className="btn btn-primary mx-2" onClick={() => handleDeposit}>+</button>
 Update Balance
<button className="btn btn-primary mx-2"  onClick={() => handleWithdraw}>-</button> */}
    </div>
  );
};

export default Todo;
