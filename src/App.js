// import { Form } from "./component/TodoList/todo-item";
import TodoList, { Todos } from "./component/TodoList/todo-list";
import { Provider, useDispatch, useSelector } from "react-redux";
// import {deleteAll} from './todostate/action/index';
import Navbar from "./component/Navbar";
import Shop from "./component/Shop";
import Todo from "./redux-toolkit/reducer/Todo";
import { toolkitStore } from "./store/store";
import { UserList } from "./component/Table/table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataGridTable from "./component/DatagridTable/datagridtable";
import UpdateUserListView from "./component/DatagridTable/datagridtable";

function App() {
  // const dispatch = useDispatch();

  // const todos = useSelector((state) => state.operationsReducer);

  return (
    <>
      <div className="wrapper">
        {/* <Navbar/>
      <Shop/> */}
        <br></br>
        <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>

        {/* <Form/> */}
        <BrowserRouter>
        <Routes>
{/* <Route path = '/' element = {<TodoList/>}/>
<Route path = '/table' element = {<DataGridTable/>}/> */}
        </Routes>
        </BrowserRouter>
        {/* <TodoList /> */}
        {/* {todos > 1&&(
      <button className='btn btn-danger btn-md delete-all'
      onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
    )} */}
      </div>
      {/* <Provider store={toolkitStore} > */}
      {/* <Todo/> */}

      {/* </Provider> */}
      
    </>
  );
}

export default App;
