// Imports
import React, { useState } from 'react'

// App imports
import { register } from '../api/actions/mutation'

const Register = ({ history }) => {
  // state
  const [username, setUsername] = useState('')

  // on submit
  const onSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await register(username)

      console.log(data)

      if (data.success) {
        history.push('/user/login')
      }
    } catch (error) {
      console.log(error)
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
          autoFocus
        />

        <button type='submit'>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Register
