// Imports
import axios from 'axios'

// create
export const create = text => {
  return axios.post('http://localhost:4000/note/create', { text })
}
