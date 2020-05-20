// Imports
import React from 'react'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'

// App imports
import routes from '../../routes'
import { userAuth } from '../../user/api/state'

// Component
const Header = () => {
  // state
  const auth = useRecoilValue(userAuth)

  console.log(auth)

  return (
    <header>
      <ul>
        <li>
          <Link to={routes.pages.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.pages.about}>About</Link>
        </li>
        <li>
          <Link to={routes.user.register}>Register</Link>
        </li>
        <li>
          <Link to={routes.user.login}>Login</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
