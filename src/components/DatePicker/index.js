import { KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './style';

const DatePicker = ({ date, setDate }) => {
	const classes = useStyles();

	const handleChange = (newValue) => {
		setDate(+newValue);
	};

	return (
		<KeyboardDatePicker
			label="Due Date"
			value={date}
			onChange={handleChange}
			minDate={new Date()}
			format="DD/MM/yyyy"
			className={classes.root}
		/>
	);
};

export default DatePicker;
