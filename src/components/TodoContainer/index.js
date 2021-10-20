import Todo from '../Todo';
import { Container } from '@material-ui/core';
import useStyles from './style';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../../store/action-creators';

const TodoContainer = () => {
	const classes = useStyles();

	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();
	const { deleteTodo, updateTodo } = bindActionCreators(
		actionCreators,
		dispatch
	);

	const getTodos = () => {
		const result = todos.map((todo, index) => (
			<Todo
				key={index}
				todo={todo}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
			/>
		));
		return result.length ? (
			result
		) : (
			<h1 className={classes.noTodos}>Nothing to do!</h1>
		);
	};

	return (
		<Container disableGutters className={classes.root} maxWidth={false}>
			{todos.loading ? <Loading /> : getTodos()}
		</Container>
	);
};

export default TodoContainer;
