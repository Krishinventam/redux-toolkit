import { SET_LOADING, SET_PROJECT, SET_TASK } from '../../state/types/index';

const initialState = {
  loading: false,
  project: {},
  task: {}
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    case SET_TASK:
      return {
        ...state,
        task: action.payload
      };
    default:
      return state;
  }
}

export default appReducer;
