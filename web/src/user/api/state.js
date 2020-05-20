// Imports
import { atom } from 'recoil'

// App imports
import { loginSet } from './actions/query'

const userAuthDefault = {
  isAuthenticated: false,
  user: null
}

// on page load
// try to get user token and details from localStorage
const token = window.localStorage.getItem('token')
if (token && token !== 'undefined' && token !== '') {
  const user = JSON.parse(window.localStorage.getItem('user'))

  if (user) {
    loginSet(token, user)

    userAuthDefault.isAuthenticated = true
    userAuthDefault.user = user
  }
}

// auth
export const userAuth = atom({
  key: 'userAuth',
  default: userAuthDefault
})
