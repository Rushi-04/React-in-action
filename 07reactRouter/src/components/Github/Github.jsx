import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
  
  const [data, setData] = useState({});
  
    useEffect(() => {
      fetch('https://api.adviceslip.com/advice')
      .then(responce => responce.json())
      .then(data1 => {
        setData(data1.slip)
      })
    }, [])
    // const data = useLoaderData();
    // console.log(data)

  return (
    <div className='text-center text-white bg-gray-600 rounded-2xl p-3 text-2xl font-medium m-2 '>
        {data ? `Life Advice: ${data.advice}` : 'Loading...'}
        <img src={null} alt="" />
        </div>
  )
}

export default Github

// export const getJoke = async() => {
//   const responce = await fetch('https://api.adviceslip.com/advice')
//   const data = responce.json()
//   return data.slip
// }