import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
	root: {
		margin: '10px',
		background: '#F5F5F5',
		'& .MuiCardHeader-root': {
			padding: 0,
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
}));
