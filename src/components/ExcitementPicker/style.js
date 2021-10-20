import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
	smiley: {
		cursor: 'pointer',
		marginLeft: '4px',
		marginRight: '4px',
		marginTop: '6px',
		color: '#BDBDBD',
		'&:hover': {
			color: '#aaa',
		},
	},
	smileyActive: {
		cursor: 'pointer',
		marginLeft: '4px',
		marginRight: '4px',
		marginTop: '6px',
		color: '#8BC34A',
	},
	label: {
		marginTop: '6px',
		textAlign: 'center',
		marginRight: '21px',
	},
}));
