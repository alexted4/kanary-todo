import { Container } from '@material-ui/core';
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

	const EXCITEMENTS = [
		{ id: 0, icon: faFrown },
		{ id: 1, icon: faMeh },
		{ id: 2, icon: faSmile },
		{ id: 3, icon: faGrinBeam },
	];

	const getExcitements = () => {
		return EXCITEMENTS.map((exc) => (
			<FontAwesomeIcon
				key={exc.id}
				size="2x"
				icon={exc.icon}
				className={
					excitement === exc.id ? classes.smileyActive : classes.smiley
				}
				onClick={() => setExcitement(exc.id)}
			/>
		));
	};

	return <Container>{getExcitements()}</Container>;
};

export default ExcitementPicker;
