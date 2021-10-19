import { InputLabel, Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFrown,
	faSmile,
	faGrinBeam,
	faMeh,
} from '@fortawesome/free-regular-svg-icons';
import useStyles from './style';

const ExcitementPicker = ({ excitement, setExcitement }) => {
	const classes = useStyles();
	return (
		<>
			<InputLabel shrink>Excitement level</InputLabel>
			<Container>
				<FontAwesomeIcon
					size="2x"
					icon={faFrown}
					className={excitement === 0 ? classes.smileyActive : classes.smiley}
					onClick={() => setExcitement(0)}
				/>
				<FontAwesomeIcon
					size="2x"
					icon={faMeh}
					className={excitement === 1 ? classes.smileyActive : classes.smiley}
					onClick={() => setExcitement(1)}
				/>
				<FontAwesomeIcon
					size="2x"
					icon={faSmile}
					className={excitement === 2 ? classes.smileyActive : classes.smiley}
					onClick={() => setExcitement(2)}
				/>
				<FontAwesomeIcon
					size="2x"
					icon={faGrinBeam}
					className={excitement === 3 ? classes.smileyActive : classes.smiley}
					onClick={() => setExcitement(3)}
				/>
			</Container>
		</>
	);
};

export default ExcitementPicker;
