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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={legacyStore}> */}
    {/* <App /> */}

    {/* </Provider> */}
    <Provider store={toolkitStore}>
      <Todo />
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
