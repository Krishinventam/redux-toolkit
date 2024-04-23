import { SET_LOADING, SET_PROJECT, SET_TASK } from '../../state/types/index'

export const setLoading = (isLoading) => {
  console.log('loading',isLoading)
  return (dispatch) =>{
    dispatch({
  type: SET_LOADING,
  payload: isLoading
    })
};
};

export const setProject = (project, projectdetails={ name: 'New Project ' ,owner: 'Krish Shah'}) => {
  console.log('project',projectdetails);
  return (dispatch) =>{
    dispatch({
  type: SET_PROJECT,
  payload: {...project , ...projectdetails}
})
  }
}

export const setTask = (task, taskdetails={task: 'New Task' , priority:'Moderate'}) => {
  console.log('task',taskdetails);
  return (dispatch) =>{
    dispatch({
  type: SET_TASK,
  payload: {...task, ...taskdetails}
})
}
};
