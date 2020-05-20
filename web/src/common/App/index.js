// Imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// App imports
import Home from '../../pages/Home'
import About from '../../pages/About'
import UserRegister from '../../user/Register'
import UserLogin from '../../user/Login'
import Notification from '../Notification'

const App = () => {
  // render
  return (
    <Router>
      {/* navigation */}
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/register">Register</Link>
          </li>
          <li>
            <Link to="/user/login">Login</Link>
          </li>
        </ul>
      </header>

      <hr />

      {/* body */}
      <main>
        {/* notification */}
        <Notification />

        {/* routes */}
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/about" component={About} />

          <Route path="/user/register" component={UserRegister} />

          <Route path="/user/login" component={UserLogin} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
