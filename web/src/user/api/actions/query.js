// Imports
import axios from 'axios'

// login
export const login = username => {
  return axios.post('http://localhost:4000/user/login', { username })
}

// login set localStorage
export const loginSet = (token, user) => {
  // HTTP header
  axios.defaults.headers.common['Authentication'] = `Bearer ${token}`

  // localStorage values
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(user))
}

// logout remove localStorage
export const logoutUnset = () => {
  // HTTP header
  delete axios.defaults.headers.common['Authentication']

  // localStorage values
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
}
