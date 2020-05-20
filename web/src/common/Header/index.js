// Imports
import React from 'react'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'

// App imports
import routes from '../../routes'
import { userAuth } from '../../user/api/state'
import { logoutUnset } from '../../user/api/actions/query'

// Component
const Header = () => {
  // state
  const [auth, setAuth] = useRecoilState(userAuth)

  console.log(auth)

  // onLogout
  const onLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: null
    })

    logoutUnset()
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
