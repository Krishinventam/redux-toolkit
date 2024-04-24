import axios from 'axios';
import { FETCH_TODOS_FAILURE, FETCH_TODOS_START, FETCH_TODOS_SUCCESS } from '../../state/types';

export const fetchTodos = () => {
    return dispatch => {
        dispatch({ type: FETCH_TODOS_START });
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                const todos = response.data.slice(0,3)
                dispatch({ type: FETCH_TODOS_SUCCESS, payload: todos });
            })
            .catch(error => {
                dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
            });
    };
};
