// Imports
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Link, useHistory } from 'react-router-dom'

// App imports
import routes from '../../routes'
import { commonNotification } from '../../common/api/state'
import { userAuth } from '../../user/api/state'
import { logoutUnset } from '../../user/api/actions/query'

// Component
const Header = () => {
  // state
  const [auth, setAuth] = useRecoilState(userAuth)
  const setNotification = useSetRecoilState(commonNotification)
  let history = useHistory()

  // onLogout
  const onLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: null
    })

    setNotification({
      message: 'Logged out successfully.',
      isVisible: true
    })

    logoutUnset()

    history.push(routes.user.login)
  }

  // render
  return (
    <header>
      <ul>
        <li>
          <Link to={routes.pages.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.pages.about}>About</Link>
        </li>
        {
          auth.isAuthenticated
            ? <>
                <li>
                  <Link to={routes.user.dashboard}>Dashboard</Link>
                </li>
                <li>
                  <Link to={routes.note.list}>Notes</Link>
                </li>
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              </>
            : <>
                <li>
                  <Link to={routes.user.register}>Register</Link>
                </li>
                <li>
                  <Link to={routes.user.login}>Login</Link>
                </li>
              </>
        }
      </ul>
    </header>
  )
}

export default Header
