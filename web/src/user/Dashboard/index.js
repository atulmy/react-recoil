// Imports
import React from 'react'
import { useRecoilValue } from 'recoil'

// App imports
import { userAuth } from '../../user/api/state'

// Component
const Dashboard = () => {
  // const
  const auth = useRecoilValue(userAuth);

  // render
  return (
    <div>
      <h3>Dashboard</h3>

      {
        auth.isAuthenticated &&
        <p>Welcome, { auth.user.username }!</p>
      }
    </div>
  )
}

export default Dashboard
