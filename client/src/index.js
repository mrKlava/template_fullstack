import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import store from './store/store'
import Router from './Router'

import './index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'))
/* pass router to app and wrap it with Redux store*/
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
)