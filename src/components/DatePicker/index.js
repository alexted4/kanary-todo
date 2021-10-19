import { KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './style';

const DatePicker = ({ date, setDate }) => {
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
		/>
	);
};

export default DatePicker;
