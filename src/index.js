import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { legacyStore, toolkitStore } from "./store/store";
import Todo from "./redux-toolkit/reducer/Todo";
import { UserList } from "./component/Table/table";
import { AddUser } from "./component/Table/adduser";
import { EditUser } from "./component/Table/edituser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataGridTable from "./component/DatagridTable/datagridtable";
import Technologyform from "./TechnologyForm/technologyform";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={legacyStore}> */}
    {/* <App /> */}

    {/* </Provider> */}
    <Provider store={toolkitStore}>
      <BrowserRouter>
      <Routes>
      <Route path = '/' element = {<Todo/>}/>
<Route path = '/table' element = {<DataGridTable/>}/>
<Route path = '/tech-form' element = {<Technologyform/>}/>
<Route path = '/tech-form/new' element = {<Technologyform/>}/>
<Route path= '/tech-form/:id' element= {<Technologyform/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Todo /> */}
      {/* <UserList/>
      <AddUser/> */}
      {/* <EditUser/> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
