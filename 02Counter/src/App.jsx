import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(10);
  // let counter = 5;
  const AddValue = () => {
    if (counter > 20) {
      console.error("Counter exceeds 20 can't increase value")
    }else{
      setCounter(counter + 1);
    }
  }
  
  const SubValue = () => {
    if (counter < 1) {
      console.error("Counter reached 0 can't decrease value")
    }
    else {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Welcome to counter</h1>
      <h1>Counter is : {counter}</h1>
      <div>
        <button onClick={AddValue}>Add Value</button>
        <button onClick={SubValue}>Sub Value</button>
      </div>
      <h1>Counter is : {counter}</h1>
      <h1>Counter is : {counter}</h1>
      <h1>Counter is : {counter}</h1>

    </>
  )
}

export default App
