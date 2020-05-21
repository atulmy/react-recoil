// Imports
import { atom, selector } from 'recoil'

// App imports
import { userAuth } from '../../user/api/state'
import { list } from './actions/query'

// note list
export const noteList = selector({
  key: 'noteList',
  get: async ({ get }) => {
    // force update cached data based on user
    get(userAuth)
    get(noteUpdatedOn)

    let notes = []

    try {
      const { data } = await list()

      if(data && data.success) {
        notes = data.list
      }
    } catch (e) {
      console.log(e.message)
    }

    return notes
  }
})

// note count
export const noteUpdatedOn = atom({
  key: 'noteUpdatedOn',
  default: new Date()
})
