import { Input, InputLabel } from '@material-ui/core';
import useStyles from './style';

const TimePicker = ({ time, setTime }) => {
	const classes = useStyles();

	const handleTimeChange = (e) => {
		const value = e.target.value;
		return Number.isNaN(parseInt(value))
			? alert('Time must be a number')
			: setTime(parseInt(value));
	};

	return (
		<div className={classes.root}>
			<InputLabel shrink>Minutes to complete</InputLabel>
			<Input
				className={classes.dateInput}
				value={time}
				onChange={(e) => handleTimeChange(e)}
			/>
		</div>
	);
};

export default TimePicker;
