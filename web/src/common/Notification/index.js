// Imports
import React from 'react'
import { useRecoilState } from 'recoil'

// App imports
import { commonNotification } from './../api/state'

// Component
const Notification = () => {
  // state
  const [notification, setNotification] = useRecoilState(commonNotification)

  // on hide
  const onHide = () => {
    setNotification(previous => ({
      ...previous,
      isVisible: false
    }))
  }

  return (
    <>
      {
        notification.isVisible &&
        <section>
          <p>{ notification.message } <button onClick={onHide}>Hide</button></p>

          <hr />
        </section>
      }
    </>
  )
}

export default Notification
