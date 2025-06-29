import './App.css' 
import LiftingStatesUp from './components/LiftingStatesUp'

function App() {
  const getStock = (stock) => {
    console.log(stock)
  }

  return (
    <>
      <LiftingStatesUp fn={getStock} />
    </>
  )
}

export default App
