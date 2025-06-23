import React, { use } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams(null)
  return (
    <div className='text-white bg-gray-500 text-center text-3xl p-5 m-1'>User: {userid}</div>
  )
}

export default User