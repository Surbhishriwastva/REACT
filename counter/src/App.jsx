import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addvalue = () => {
    if (counter >= 0 && counter < 10) {
      setCounter(counter + 1);
    }

  }
  const removeValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (

    <>
      <h1> chai aur react</h1>
      <h2> counter value:</h2>
      <button onClick={addvalue}>Add value{counter}</button>
      <br></br>
      <button onClick={removeValue}>
        Remove value {counter}
      </button>
      <p> footer: {counter}</p>
    </>

  )
}

export default App
