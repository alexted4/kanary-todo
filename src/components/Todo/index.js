import { Card, CardContent, CardHeader, InputLabel } from '@material-ui/core';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import Dependencies from '../Dependencies';
import ExcitementPicker from '../ExcitementPicker';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import useStyles from './style';

const Todo = ({ todo, deleteTodo, updateTodo }) => {
	const [date, setDate] = useState(todo.dueDate);
	const [time, setTime] = useState(todo.timeToComplete);
	const [excitement, setExcitement] = useState(todo.excitement);

	useEffect(() => {
		if (todo.dueDate !== date) {
			const newTodo = todo;
			newTodo.dueDate = date;
			updateTodo(newTodo);
		}
	}, [date]);

	useEffect(() => {
		if (todo.timeToComplete !== time) {
			const newTodo = todo;
			newTodo.timeToComplete = time;
			updateTodo(newTodo);
		}
	}, [time]);

	useEffect(() => {
		if (todo.excitement !== excitement) {
			const newTodo = todo;
			newTodo.excitement = excitement;
			updateTodo(newTodo);
		}
	}, [excitement]);

	useEffect(() => {
		if (todo.dueDate !== date) {
			setDate(+new Date(todo.dueDate));
		}
	}, [todo.dueDate]);

	useEffect(() => {
		if (todo.timeToComplete !== time) {
			setTime(todo.timeToComplete);
		}
	}, [todo.timeToComplete]);

	const getSize = () => {
		switch (true) {
			case time > 15 && time <= 30:
				return {
					width: '325px',
					height: '350px',
				};
			case time > 30 && time <= 90:
				return {
					width: '350px',
					height: '375px',
				};
			case time > 90:
				return {
					width: '375px',
					height: '400px',
				};
			default:
				return {
					width: '300px',
					height: '325px',
				};
		}
	};

	const classes = useStyles();

	return (
		<Card className={classes.root} style={getSize()}>
			<CardHeader
				title={
					<div className={classes.header}>
						<span className={classes.headerText}>{todo.name}</span>
						<FontAwesomeIcon
							size="lg"
							icon={faTimes}
							className={classes.closeIcon}
							onClick={() => deleteTodo(todo.id)}
						/>
					</div>
				}
			/>
			<CardContent>
				<DatePicker date={date} setDate={setDate} />
				<br />

				<TimePicker time={time} setTime={setTime} />

				{todo.dependencies.length > 0 && (
					<InputLabel className={classes.dependenciesLabel} shrink>
						Dependencies
					</InputLabel>
				)}
				<div className={classes.dependenciesWrapper}>
					<Dependencies dependencies={todo.dependencies} />
				</div>

				<InputLabel className={classes.excitementLabel} shrink>
					Excitement level
				</InputLabel>
				<ExcitementPicker
					excitement={excitement}
					setExcitement={setExcitement}
				/>
			</CardContent>
		</Card>
	);
};

export default Todo;
