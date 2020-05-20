// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot as GlobalState } from 'recoil'

// App imports
import Layout from './common/Layout'

// Root
ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <Layout />
    </GlobalState>
  </React.StrictMode>,

  document.getElementById('root')
)
