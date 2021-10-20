import { Link } from 'react-router-dom';
import useStyles from './style';

const ErrorPage = ({ errorCode }) => {
	const classes = useStyles();

	const getError = () => {
		switch (errorCode) {
			case 404: {
				return 'Error 404: Not Found';
			}
			default: {
				return 'Unknown Error';
			}
		}
	};

	return (
		<div className={classes.root}>
			<h1>{getError()}</h1>
			<Link className={classes.link} to="/">
				Return to homepage
			</Link>
		</div>
	);
};

export default ErrorPage;
