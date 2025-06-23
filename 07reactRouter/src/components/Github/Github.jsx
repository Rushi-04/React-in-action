import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState({});

    useEffect(() => {
      fetch('https://api.github.com/Rushi-04')
      .then(responce => responce.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
    }, [])

  return (
    <div className='text-center text-white bg-teal-500 rounded-2xl p-3 text-2xl font-medium m-2 '>
        Github id: {data.id}
        <img src={data.avatar_url} alt="" />
        </div>
  )
}

export default Github