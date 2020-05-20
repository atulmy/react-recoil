// Imports
import React, { useState } from 'react'

// App imports
import { login } from '../api/actions/query'

const Login = () => {
  // state
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // on submit
  const onSubmit = async event => {
    event.preventDefault()

    setIsLoading(true)

    try {
      const { data } = await login(username)

      if (data.success && data.data) {

      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
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
          autoFocus
        />

        <button
          type='submit'
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Login
