import { TODOS_FAIL, TODOS_PASS, TODOS_START } from '../../state/types/index';

const firststate = {
    todos: [],
    loading: false,
    error: null
};

 const apiReducer = (state = firststate, action) => {
    switch (action.type) {
        case TODOS_START:
            return { ...state, loading: true, error: null };
        case TODOS_PASS:
            return { ...state, loading: false, todos: action.payload };
        case TODOS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default apiReducer