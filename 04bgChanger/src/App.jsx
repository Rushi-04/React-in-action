import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {

  const [color, setColor] = useState("Olive");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 ' >
        <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-3 m-2 rounded-3xl '>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "red"}} onClick={(color)=>setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "Blue"}} onClick={(color)=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "Green"}} onClick={(color)=>setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "Yellow"}} onClick={(color)=>setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "Violet"}} onClick={(color)=>setColor("violet")}>Violet</button>
          <button className='outline-none px-4 py-1 rounded border-b-black ' style={{backgroundColor: "White"}} onClick={(color)=>setColor("white")}>White</button>
          <button className='outline-none px-4 py-1 rounded text-white' style={{backgroundColor: "Black"}} onClick={(color)=>setColor("black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "Cyan"}} onClick={(color)=>setColor("cyan")}>Cyan</button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "Pink"}} onClick={(color)=>setColor("pink")}>Pink</button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "Gold"}} onClick={(color)=>setColor("gold")}>Gold</button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor: "Orange"}} onClick={(color)=>setColor("orange")}>Orange</button>
      </div>
    </div>
    </div>

  )
}

export default App
