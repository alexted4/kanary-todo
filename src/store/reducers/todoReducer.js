import {
	INIT_STATE,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAILURE,
	DELETE_TODO_FAILURE,
	DELETE_TODO_SUCCESS,
	UPDATE_TODO_SUCCESS,
	UPDATE_TODO_FAILURE,
	SORT_TODO_SUCCESS,
	SORT_TODO_FAILURE,
	SET_LOADING,
} from '../types';
//import sampleData from '../sampleData';

const initialState = {
	loading: false,
	todos: [],
	error: null,
};

export default function todo(state = initialState, action) {
	switch (action.type) {
		case INIT_STATE:
			return {
				...state,
				todos: action.payload.todos,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.payload.loading,
			};
		case ADD_TODO_SUCCESS:
			return {
				...state,
				todos: [...state.todos, action.payload.data],
			};
		case ADD_TODO_FAILURE:
			return {
				...state,
				error: action.payload.data,
			};
		case DELETE_TODO_SUCCESS:
			return {
				...state,
				todos: action.payload.data,
			};
		case DELETE_TODO_FAILURE:
			return {
				...state,
				error: action.payload.data,
			};
		case UPDATE_TODO_SUCCESS:
			return {
				...state,
				todos: action.payload.data,
			};
		case UPDATE_TODO_FAILURE:
			return {
				...state,
				error: action.payload.data,
			};
		case SORT_TODO_SUCCESS:
			return {
				...state,
				todos: action.payload.data,
				loading: false,
			};
		case SORT_TODO_FAILURE:
			return {
				...state,
				error: action.payload.data,
				loading: false,
			};
		default:
			return state;
	}
}
