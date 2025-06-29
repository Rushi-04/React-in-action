import React from 'react'

const LiftingStatesUp = (props) => {

    const handleClick = () => {
        const stock = "Abe"
        props.fn(stock)
    }

  return (
    <div>
        <h1>Lifting State Up</h1>

        <button onClick={handleClick}>Click Me</button>
    </div>
    
  )
}

export default LiftingStatesUp