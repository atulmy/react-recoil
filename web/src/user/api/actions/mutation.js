// Imports
import axios from 'axios'

// register
export const register = username => {
  return axios.post('http://localhost:4000/user/register', { username })
}
