// Imports
import axios from 'axios'

// login
export const login = username => {
  return axios.post('http://localhost:4000/user/login', { username })
}
