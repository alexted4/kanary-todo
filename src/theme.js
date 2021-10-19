import { createTheme } from '@material-ui/core/styles';
import { green, red, lightGreen } from '@material-ui/core/colors';

export default createTheme({
	palette: {
		primary: {
			main: '#212121',
		},
		secondary: lightGreen,
		error: red,
		success: green,
		background: {
			default: '#424242',
		},
	},
});
