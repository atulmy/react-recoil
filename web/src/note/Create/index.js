// Imports
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

// App imports
import routes from '../../routes'
import { commonNotification } from '../../common/api/state'
import { noteUpdatedOn } from '../api/state'
import { create } from '../api/actions/mutation'

// Component
const Create = ({ history }) => {
  // state
  const [text, setText] = useState('Hello world')
  const setNotification = useSetRecoilState(commonNotification)
  const setUpdatedOn = useSetRecoilState(noteUpdatedOn)

  // on submit
  const onSubmit = async event => {
    event.preventDefault()

    try {
      // server call
      const { data } = await create(text)

      // show notification
      setNotification({
        message: data.message,
        isVisible: true
      })

      // redirect
      if (data.success) {
        setUpdatedOn(new Date())

        // redirect to note list
        history.push(routes.note.list)
      }
    } catch (error) {
      setNotification({
        message: error.message,
        isVisible: true
      })
    }
  }

  // on cancel
  const onCancel = () => {
    history.push(routes.note.list)
  }

  // render
  return (
    <section>
      <h3>Create Note</h3>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder='Enter note'
          required
          autoFocus
        />

        <button type='submit'>
          <strong>Submit</strong>
        </button>

        <button
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
      </form>
    </section>
  )
}

export default Create
