import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
	root: {
		margin: '10px',
		background: '#F5F5F5',
		textAlign: 'center',
		'& .MuiCardHeader-root': {
			padding: 0,
		},
		overflow: 'auto',
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
	header: {
		background: '#8BC34A',
		padding: '16px 16px 16px 16px',
	},
	headerText: {
		fontSize: '17px',
	},
	closeIcon: {
		float: 'right',
		color: '#558B2F',
		borderRadius: '3px',
		boxShadow: '1px #333',
		cursor: 'pointer',
		'& :hover': {
			color: '#464646',
		},
	},
	dependenciesLabel: {
		marginTop: '6px',
		textAlign: 'center',
		marginRight: '42px',
	},
	dependenciesWrapper: {
		display: 'flex',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
	},
	excitementLabel: {
		marginTop: '6px',
		textAlign: 'center',
		marginRight: '25px',
	},
}));
