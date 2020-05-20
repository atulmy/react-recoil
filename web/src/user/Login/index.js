// Imports
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

// App imports
import routes from '../../routes'
import { commonNotification } from '../../common/api/state'
import { userAuth } from '../../user/api/state'
import { login, loginSetLocalStorage } from '../api/actions/query'

// Component
const Login = ({ history }) => {
  // state
  const [username, setUsername] = useState('user')
  const setNotification = useSetRecoilState(commonNotification)
  const setUserAuth = useSetRecoilState(userAuth)

  // on submit
  const onSubmit = async event => {
    event.preventDefault()

    try {
      // server call
      const { data } = await login(username)

      // show notification
      setNotification({
        message: data.message,
        isVisible: true
      })

      // redirect
      if (data.success) {
        // state
        setUserAuth({
          isAuthenticated: true,
          user: data.user
        })

        // local storage
        loginSetLocalStorage(data.token, data.user)

        // redirect to dashboard
        history.push(routes.user.dashboard)
      }
    } catch (error) {
      setNotification({
        message: error.message,
        isVisible: true
      })
    }
  }

  // render
  return (
    <section>
      <h3>Login</h3>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder='Username'
          required
          autoFocus
        />

        <button type='submit'>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Login
