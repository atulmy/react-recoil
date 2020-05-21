// Imports
import React from 'react'
import { useRecoilValueLoadable } from 'recoil'

// App imports
import routes from '../../routes'
import { noteList } from '../api/state'

// Component
const List = ({ history }) => {
  // state
  const notes = useRecoilValueLoadable(noteList)

  // on create
  const onCreate = () => {
    history.push(routes.note.create)
  }

  // render
  return (
    <div>
      <h3>Notes <button onClick={onCreate}>+ Create</button></h3>

      {
        notes.state === 'loading'
          ? <p>loading...</p>
          : notes.contents.length === 0
            ? <p>You have not added any notes yet.</p>
            : <ul>
              {
                notes.contents && notes.contents.map(n =>
                  <li key={n.id}>{ n.text }</li>
                )
              }
            </ul>
      }
    </div>
  )
}

export default List
