import Todo from '../Todo';
import { Container } from '@material-ui/core';
import useStyles from './style';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const TodoContainer = () => {
	const classes = useStyles();

	const todos = useSelector((state) => state.todo.todos);

	const getTodos = () => {
		const result = [];
		for (let i = 0; i < todos.length; i++) {
			console.log(todos[i]);
			result.push(<Todo key={i} data={todos[i]} />);
		}
		if (result.length) {
			return result;
		} else {
			return <h1 className={classes.noTodos}>Nothing to do!</h1>;
		}
	};

	return (
		<Container disableGutters className={classes.root} maxWidth={false}>
			{todos.loading ? <Loading /> : getTodos()}
		</Container>
	);
};

export default TodoContainer;
