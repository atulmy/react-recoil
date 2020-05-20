// Imports
import { atom } from 'recoil'

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
    userAuthDefault.isAuthenticated = true
    userAuthDefault.user = user
  }
}

// auth
export const userAuth = atom({
  key: 'userAuth',
  default: userAuthDefault
})
