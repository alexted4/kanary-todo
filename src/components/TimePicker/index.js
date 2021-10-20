import { Input, InputLabel } from '@material-ui/core';
import useStyles from './style';

const TimePicker = ({ time, setTime }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<InputLabel shrink>Minutes to complete</InputLabel>
			<Input
				className={classes.dateInput}
				value={time}
				onChange={(e) => setTime(parseInt(e.target.value))}
			/>
		</div>
	);
};

export default TimePicker;
