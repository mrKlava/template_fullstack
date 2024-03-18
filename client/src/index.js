import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './Router'

import './index.scss'



const root = ReactDOM.createRoot(document.getElementById('root'))
/* pass router to app */
root.render(
  <React.StrictMode>
    <Router /> 
  </React.StrictMode>
)