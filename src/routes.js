import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Loading from './components/Loading';

const ErrorPage = React.lazy(() => import('./components/ErrorPage'));
const TodoContainer = React.lazy(() => import('./components/TodoContainer'));
const Nav = React.lazy(() => import('./components/Nav'));

export default function Routes() {
	return (
		<React.Suspense fallback={Loading}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Nav />
						<TodoContainer />
					</Route>
					<Route path="*">
						<ErrorPage errorCode={404} />
					</Route>
				</Switch>
			</Router>
		</React.Suspense>
	);
}
