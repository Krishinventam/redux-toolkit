// import { Form } from "./component/TodoList/todo-item";
import TodoList, { Todos } from "./component/TodoList/todo-list";
import {Provider, useDispatch, useSelector} from 'react-redux';
// import {deleteAll} from './todostate/action/index';
import Navbar from "./component/Navbar";
import Shop from "./component/Shop";
import store from "./storetoolkit";
import Todo from "./component/TodoList/todo";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);
 

  return (
    <>
    <div className="wrapper">
      <Navbar/>
      <Shop/>
    <br></br>
    <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
 
    {/* <Form/> */}
    <TodoList />
    {/* {todos > 1&&(
      <button className='btn btn-danger btn-md delete-all'
      onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
    )} */}
  </div>
  <Provider store={store}>
    {/* <Todo/> */}

  </Provider>
  </>
);
}
  

export default App;


