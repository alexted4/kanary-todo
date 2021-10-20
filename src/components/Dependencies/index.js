import { Button } from '@material-ui/core';
import useStyles from './style';

const Dependencies = ({ dependencies }) => {
	const classes = useStyles();

	const getDependencies = () => {
		return dependencies.map((dependency, index) => (
			<Button className={classes.btn} key={index} disabled>
				{dependency}
			</Button>
		));
	};

	if (!dependencies?.length) return null;
	return <div className={classes.root}>{getDependencies()}</div>;
};

export default Dependencies;
