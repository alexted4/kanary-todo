import {
	INIT_STATE,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAILURE,
	DELETE_TODO_SUCCESS,
	DELETE_TODO_FAILURE,
	UPDATE_TODO_SUCCESS,
	UPDATE_TODO_FAILURE,
	SORT_TODO_SUCCESS,
	SORT_TODO_FAILURE,
	SET_LOADING,
	DELETE_ALL_TODOS_SUCCESS,
	DELETE_ALL_TODOS_FAILURE,
} from '../actionTypes';

const updateStorage = (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

export const getInitialState = () => {
	return (dispatch) => {
		dispatch(setLoading(true));
		const todos = JSON.parse(localStorage.getItem('todos'));
		todos ? dispatch(stateInit(todos)) : dispatch(stateInit([]));
	};
};

const stateInit = (todos) => ({
	type: INIT_STATE,
	payload: {
		todos: todos,
	},
});

const setLoading = (loading) => ({
	type: SET_LOADING,
	payload: {
		loading: loading,
	},
});

export const addTodo = (todo) => {
	return (dispatch, getState) => {
		dispatch(setLoading(true));
		try {
			dispatch(addTodoSuccess(todo));
			dispatch(sortTodos());
		} catch (error) {
			dispatch(addTodoFailure(error.message));
		}
	};
};

const addTodoSuccess = (data) => ({
	type: ADD_TODO_SUCCESS,
	payload: {
		data: data,
	},
});

const addTodoFailure = (data) => ({
	type: ADD_TODO_FAILURE,
	payload: {
		data: data,
	},
});

export const deleteTodo = (id) => {
	return (dispatch, getState) => {
		dispatch(setLoading(true));
		const todos = getState().todo.todos.filter((el) => {
			return el.id !== id;
		});
		try {
			dispatch(deleteTodoSuccess(todos));
			dispatch(sortTodos());
		} catch (error) {
			dispatch(deleteTodoFailure(error.message));
		}
	};
};

const deleteTodoSuccess = (data) => ({
	type: DELETE_TODO_SUCCESS,
	payload: {
		data: data,
	},
});

const deleteTodoFailure = (data) => ({
	type: DELETE_TODO_FAILURE,
	payload: {
		data: data,
	},
});

export const updateTodo = (todo) => {
	return (dispatch, getState) => {
		dispatch(setLoading(true));
		const todos = getState().todo.todos.filter((el) => {
			return el.id !== todo.id;
		});
		todos.push(todo);
		try {
			dispatch(updateTodoSuccess(todos));
			dispatch(sortTodos());
		} catch (error) {
			dispatch(updateTodoFailure(error.message));
		}
	};
};

const updateTodoSuccess = (data) => ({
	type: UPDATE_TODO_SUCCESS,
	payload: {
		data: data,
	},
});

const updateTodoFailure = (data) => ({
	type: UPDATE_TODO_FAILURE,
	payload: {
		data: data,
	},
});

const sortTodos = () => {
	return (dispatch, getState) => {
		try {
			const todos = getState().todo.todos;
			const sortedTodos = todos.slice().sort((a, b) => a.dueDate - b.dueDate);
			dispatch(sortTodoSuccess(sortedTodos));
			updateStorage(getState().todo.todos);
		} catch (error) {
			dispatch(sortTodoFailure(error.message));
		}
	};
};

const sortTodoSuccess = (data) => ({
	type: SORT_TODO_SUCCESS,
	payload: {
		data: data,
	},
});

const sortTodoFailure = (data) => ({
	type: SORT_TODO_FAILURE,
	payload: {
		data: data,
	},
});

export const deleteAllTodos = () => {
	return (dispatch, getState) => {
		dispatch(setLoading(true));
		try {
			dispatch(deleteAllTodosSuccess());
			updateStorage(getState().todo.todos);
		} catch (error) {
			dispatch(deleteAllTodosFailure(error.message));
		}
	};
};

const deleteAllTodosSuccess = () => ({
	type: DELETE_ALL_TODOS_SUCCESS,
	payload: {
		data: [],
	},
});

const deleteAllTodosFailure = (data) => ({
	type: DELETE_ALL_TODOS_FAILURE,
	payload: {
		data: data,
	},
});
