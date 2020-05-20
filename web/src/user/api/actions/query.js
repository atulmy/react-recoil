// Imports
import axios from 'axios'

// login
export const login = username => {
  return axios.post('http://localhost:4000/user/login', { username })
}

// login set localStorage
export const loginSetLocalStorage = (token, user) => {
  if (token) {
    axios.defaults.headers.common['Authentication'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authentication']
  }

  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(user))
}

// logout remove localStorage
export const logoutRemoveLocalStorage = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
}
