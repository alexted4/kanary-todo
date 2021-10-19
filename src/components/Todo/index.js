import { Card, CardContent, CardHeader, InputLabel } from '@material-ui/core';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import Dependencies from '../Dependencies';
import ExcitementPicker from '../ExcitementPicker';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../../store/action-creators';

import useStyles from './style';

const Todo = ({ data }) => {
	const [date, setDate] = useState(data.dueDate);
	const [time, setTime] = useState(data.timeToComplete);
	const [excitement, setExcitement] = useState(data.excitement);

	const dispatch = useDispatch();
	const { deleteTodo, updateTodo } = bindActionCreators(
		actionCreators,
		dispatch
	);

	const updateDate = () => {
		const todo = data;
		todo.dueDate = date;
		updateTodo(todo);
	};

	useEffect(() => {
		if (data.dueDate !== date) {
			updateDate();
		}
	}, [date]);

	useEffect(() => {
		if (data.dueDate !== date) {
			setDate(new Date(data.dueDate));
		}
	}, [data.dueDate]);

	const updateTime = () => {
		const todo = data;
		todo.timeToComplete = time;
		updateTodo(todo);
	};

	useEffect(() => {
		if (data.timeToComplete !== time) {
			updateTime();
		}
	}, [time]);

	const updateExcitement = () => {
		const todo = data;
		todo.excitement = excitement;
		updateTodo(todo);
	};

	useEffect(() => {
		if (data.excitement !== excitement) {
			updateExcitement();
		}
	}, [excitement]);

	useEffect(() => {
		// console.log(data);
		// console.log(date);
		// const debug = new Date(date);
		// console.log(debug);
	});

	const getSize = () => {
		switch (time) {
			case time > 15 && time < 30:
				return {
					width: '300px',
				};
			case time > 30 && time < 90:
				return {
					width: '400px',
				};
			case time > 90:
				return {
					width: '500px',
				};
			default:
				return {
					width: '220px',
				};
		}
	};

	const classes = useStyles();

	return (
		<Card className={classes.root} style={getSize()}>
			<CardHeader
				title={
					<div className={classes.header}>
						<span className={classes.headerText}>{data.name}</span>
						<FontAwesomeIcon
							size="lg"
							icon={faTimes}
							className={classes.closeIcon}
							onClick={() => deleteTodo(data.id)}
						/>
					</div>
				}
			/>
			<CardContent>
				<DatePicker date={date} setDate={setDate} />
				<br />
				<TimePicker time={time} setTime={setTime} />
				<InputLabel shrink>Dependencies</InputLabel>
				<Dependencies dependencies={data.dependencies} />
				<ExcitementPicker
					excitement={excitement}
					setExcitement={setExcitement}
				/>
			</CardContent>
		</Card>
	);
};

export default Todo;
