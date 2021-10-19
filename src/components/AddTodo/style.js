import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
	root: {
		maxWidth: '250px',
	},
	submitButton: {
		flex: 1,
	},
	addDependancyButton: {
		cursor: 'pointer',
		color: '#888',
		'&:hover': {
			color: '#333',
		},
	},
}));
