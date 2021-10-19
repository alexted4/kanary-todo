import { Input, InputLabel } from '@material-ui/core';
import useStyles from './style';

const TimePicker = ({ time, setTime }) => {
	const classes = useStyles();
	return (
		<>
			<InputLabel shrink>Minutes to complete</InputLabel>
			<Input
				className={classes.dateInput}
				value={time}
				onChange={(e) => setTime(e.target.value)}
			></Input>
		</>
	);
};

export default TimePicker;
