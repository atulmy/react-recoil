// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

// App imports
import App from './App'

// Root
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,

  document.getElementById('root')
)
