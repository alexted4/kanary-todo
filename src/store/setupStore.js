import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export default function setupStore(preloadedState) {
	const middlewares = [thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const enhancers = [middlewareEnhancer] || compose;
	const composedEnhancers = compose(
		...enhancers,
		window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: (f) => f
	);
	const store = createStore(reducers, preloadedState, composedEnhancers);
	return store;
}
