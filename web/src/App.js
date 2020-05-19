// Imports
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

// App imports
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <BrowserRouter>
      {/* navigation */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      {/* pages */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
