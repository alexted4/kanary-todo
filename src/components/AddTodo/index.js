import {
	Card,
	CardContent,
	CardHeader,
	TextField,
	CardActions,
	Button,
	InputAdornment,
	InputLabel,
	Input,
} from '@material-ui/core';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import ExcitementPicker from '../ExcitementPicker';
import Dependencies from '../Dependencies';
import useStyles from './style';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../../store/action-creators';
import { useEffect } from 'react';

const AddTodo = ({ handleClose }) => {
	const [date, setDate] = useState(+new Date());
	const [time, setTime] = useState(5);
	const [name, setName] = useState('');
	const [excitement, setExcitement] = useState(3);
	const [dependency, setDependency] = useState('');
	const [dependencies, setDependencies] = useState([]);

	const dispatch = useDispatch();
	const { addTodo } = bindActionCreators(actionCreators, dispatch);
	const todos = useSelector((state) => state.todo.todos);

	const submitTodo = () => {
		let newId = 0;
		if (todos[0]) {
			newId = todos.reduce((prev, current) =>
				+prev.id > +current.id ? prev : current
			).id;
		}
		if (!name || !time || !parseInt(time)) {
			alert('Error in name or time');
		} else {
			const todo = {
				id: newId + 1,
				name: name,
				dueDate: date,
				timeToComplete: parseInt(time),
				dependencies: dependencies,
				excitement: excitement,
			};
			addTodo(todo);
			handleClose();
		}
	};

	const addDependancy = () => {
		const array = dependencies;
		dependency && array.push(dependency);
		setDependencies(array);
		setDependency('');
	};

	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardHeader
				title={
					<div className={classes.header}>
						<TextField
							label="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></TextField>
					</div>
				}
			/>
			<CardContent>
				<DatePicker date={date} setDate={setDate} />
				<br />
				<TimePicker time={time} setTime={setTime} />
				<br />
				<InputLabel shrink>Dependencies</InputLabel>
				<Dependencies dependencies={dependencies} />
				<br />
				<Input
					style={{ maxWidth: '180px' }}
					value={dependency}
					onChange={(e) => setDependency(e.target.value)}
					endAdornment={
						<InputAdornment
							className={classes.addDependancyButton}
							onClick={addDependancy}
							position="end"
						>
							<FontAwesomeIcon icon={faPlus} />
						</InputAdornment>
					}
				></Input>

				<ExcitementPicker
					excitement={excitement}
					setExcitement={setExcitement}
				/>
			</CardContent>
			<CardActions>
				<Button className={classes.submitButton} onClick={submitTodo}>
					Add Todo
				</Button>
			</CardActions>
		</Card>
	);
};

export default AddTodo;
