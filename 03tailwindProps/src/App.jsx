import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carder from './components/Carder.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-cyan-400 rounded-4xl font-bold text-5xl text-white mb-5 p-2.5 '>Tailwind Test</h1>
       <Carder title="Nature" btn="Share Kar" />
       <Carder title="Rushi" />
       <Carder title="God"  btn="Karde Bhai"/>
    </>
  )
}

export default App
