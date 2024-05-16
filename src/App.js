import Todo from "./redux-toolkit/reducer/Todo";
import { Route, Routes } from "react-router-dom";
import DataGridTable from "./component/DatagridTable/datagridtable";
import Technologyform from "./TechnologyForm/technologyform";
import NavigationWrapper from "./Layout/NavigationWrapper";
import ProjectTable from "./Project/ProjectTable";
import ProjectForm from "./Project/ProjectForm";

function App() {
  return (
    <>
      <div className="wrapper">
        <NavigationWrapper>
          <Routes>
            <Route path="/todo" element={<Todo />} />
            <Route path="/technology" element={<DataGridTable />} />
            <Route path="/technology/new" element={<Technologyform />} />
            <Route path="/technology/:id" element={<Technologyform />} />
            <Route path="/project" element={<ProjectTable />} />
            <Route path="/project/new" element={<ProjectForm />} />
            <Route path="/project/:id" element={<ProjectForm />} />

          </Routes>
        </NavigationWrapper>
      </div>
    </>
  );
}

export default App;
