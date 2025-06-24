import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-black bg-teal-500 rounded-4xl p-2 m-3 font-dark cursor-pointer '>Welcome to theme Switcher</h1>
    </>
  )
}

export default App
