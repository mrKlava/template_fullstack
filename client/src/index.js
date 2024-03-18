import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './Router'

import './index.scss'
import { AuthContextProvider } from './authContext'



const root = ReactDOM.createRoot(document.getElementById('root'))
/* pass router to app */
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<Router />
		</AuthContextProvider>
	</React.StrictMode>
)