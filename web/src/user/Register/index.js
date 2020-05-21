// Imports
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

// App imports
import routes from '../../routes'
import { commonNotification } from '../../common/api/state'
import { register } from '../api/actions/mutation'

// Component
const Register = ({ history }) => {
  // state
  const [username, setUsername] = useState('')
  const setNotification = useSetRecoilState(commonNotification)

  // on submit
  const onSubmit = async event => {
    event.preventDefault()

    try {
      // server call
      const { data } = await register(username)

      // show notification
      setNotification({
        message: data.message,
        isVisible: true
      })

      // redirect
      if (data.success) {
        history.push(routes.user.login)
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
      <h3>Register</h3>

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
          <strong>Submit</strong>
        </button>
      </form>
    </section>
  )
}

export default Register
