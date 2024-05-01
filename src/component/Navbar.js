import React from "react";
import { useSelector ,useDispatch} from "react-redux";
// import { setLoading, setProject, setTask } from '../stateA/action-creatorsA/index';

const Navbar = () => {
    const amount = useSelector(state=>state.amount)
const dispatch = useDispatch()
 const { loading, project, task } = useSelector(state => state);
 const toggleLoading = () => {
  // dispatch(setLoading(!loading ));
};
  
const handleSetProject = () => {
  // dispatch(setProject(project));
};

const handleSetTask = () => {
  // dispatch(setTask(task));
};

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Krish Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
             
              
            </ul>
    <button disabled={true} className="btn-primary"> Your Balance: {amount}</button>
    
    <button onClick={toggleLoading}>
          {loading ? 'Stop Loading' : 'Start Loading'}
        </button>
        <button onClick={handleSetProject}>Set Project </button>
        <button onClick={handleSetTask}>Set Task</button>

          </div>
        </div>
      </nav>
    </div>
 
  );
};

export default Navbar;
