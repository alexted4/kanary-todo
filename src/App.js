import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';
import actionCreators from './store/action-creators/';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from './components/Loading';
import Routes from './routes';

function App() {
	const dispatch = useDispatch();
	const { getInitialState } = bindActionCreators(actionCreators, dispatch);

	const loading = useSelector((state) => state.todo.loading);

	useEffect(() => {
		getInitialState();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MuiPickersUtilsProvider utils={MomentUtils}>
				{loading ? <Loading /> : <Routes />}
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	);
}

export default App;
