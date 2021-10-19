import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
	smiley: {
		cursor: 'pointer',
		marginLeft: '7px',
		color: '#BDBDBD',
		'&:hover': {
			color: '#aaa',
		},
	},
	smileyActive: {
		cursor: 'pointer',
		marginLeft: '7px',
		color: '#8BC34A',
	},
}));
