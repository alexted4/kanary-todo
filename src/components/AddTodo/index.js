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
import { useSelector } from 'react-redux';
import _ from 'lodash';

const AddTodo = ({ handleClose, addTodo }) => {
	const [date, setDate] = useState(+new Date());
	const [time, setTime] = useState(5);
	const [name, setName] = useState('');
	const [excitement, setExcitement] = useState(3);
	const [dependency, setDependency] = useState('');
	const [dependencies, setDependencies] = useState([]);

	const todos = useSelector((state) => state.todo.todos);

	const submitTodo = () => {
		if (!name || !time) {
			return alert('Error in name or time');
		}
		const maxId = todos.length ? _.maxBy(todos, 'id').id : 0;
		const todo = {
			id: maxId + 1,
			name: name,
			dueDate: date,
			timeToComplete: time,
			dependencies: dependencies,
			excitement: excitement,
		};
		addTodo(todo);
		handleClose();
	};

	const addDependency = () => {
		const array = dependencies;
		dependency && array.push(dependency);
		setDependencies(array);
		setDependency('');
	};

	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<div className={classes.wrapper}>
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
								onClick={addDependency}
								position="end"
							>
								<FontAwesomeIcon icon={faPlus} />
							</InputAdornment>
						}
					></Input>
					<InputLabel className={classes.label} shrink>
						Excitement level
					</InputLabel>
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
			</div>
		</Card>
	);
};

export default AddTodo;
