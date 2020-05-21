// Imports
import axios from 'axios'

// list
export const list = () => {
  return axios.get('http://localhost:4000/note/list')
}
