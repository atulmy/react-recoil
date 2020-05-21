// Imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// App imports
import routes from '../../routes'
import Notification from '../Notification'
import Header from '../Header'
import PagesHome from '../../pages/Home'
import PagesAbout from '../../pages/About'
import UserRegister from '../../user/Register'
import UserLogin from '../../user/Login'
import UserDashboard from '../../user/Dashboard'
import NoteList from '../../note/List'

// Component
const Layout = () => {
  // render
  return (
    <Router>
      {/* navigation */}
      <Header />

      <hr />

      {/* body */}
      <main>
        {/* notification */}
        <Notification />

        {/* routes */}
        <Switch>
          <Route path={routes.pages.home} component={PagesHome} exact />

          <Route path={routes.pages.about} component={PagesAbout} />

          <Route path={routes.user.register} component={UserRegister} />

          <Route path={routes.user.login} component={UserLogin} />

          <Route path={routes.user.dashboard} component={UserDashboard} />

          <Route path={routes.note.list} component={NoteList} />
        </Switch>
      </main>
    </Router>
  )
}

export default Layout
