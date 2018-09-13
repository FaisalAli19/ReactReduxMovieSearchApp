import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import App from "./components/App";
import reducers from './reducers/combinedReducers';

import "materialize-css/dist/css/materialize.min.css";
import './index.css';

const middlewares = []

if (process.env.NODE_ENV === 'production') middlewares.push(thunk);
else middlewares.push(logger, thunk);

const store = createStore(reducers, applyMiddleware(...middlewares))

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
);

render(jsx, document.querySelector('#root'));