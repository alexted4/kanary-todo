import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
	root: {
		width: '300px',
		overflow: 'auto',
		display: 'flex',
		flexDirection: 'column',
		'&::-webkit-scrollbar': {
			width: '0.4em',
		},
		'&::-webkit-scrollbar-track': {
			'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(85,139,47,1)',
			outline: '1px solid slategrey',
		},
	},
	wrapper: {
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	submitButton: {
		flex: 1,
		background: '#8BC34A',
		marginTop: '6px',
		marginBottom: '16px',
	},
	addDependancyButton: {
		cursor: 'pointer',
		color: '#888',
		'&:hover': {
			color: '#333',
		},
	},
	label: {
		marginTop: '6px',
	},
}));
