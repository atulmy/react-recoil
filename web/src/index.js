// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot as GlobalState } from 'recoil'

// App imports
import App from './App'

// Root
ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,

  document.getElementById('root')
)
