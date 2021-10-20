import { makeStyles } from '@material-ui/styles';

export default makeStyles({
	addButton: {
		background: '#8BC34A',
		'&:hover': {
			background: '#558B2F',
		},
	},
	buttonText: {
		marginLeft: '8px',
		marginTop: '1px',
	},
	deleteAllButton: {
		background: 'none',
		color: '#F44336',
		boxShadow: 'none',
		'&:hover': {
			background: 'none',
			boxShadow: 'none',
			color: '#B71C1C',
		},
	},
	populateButton: {
		background: 'none',
		color: '#8BC34A',
		boxShadow: 'none',
		'&:hover': {
			background: 'none',
			boxShadow: 'none',
			color: '#558B2F',
		},
	},
});
