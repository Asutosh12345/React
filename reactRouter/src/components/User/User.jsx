import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='text-center bg-gray-600 text-3xl p-3 m-4 rounded-md '>
      User: {userid}
    </div>
  )
}

export default User
