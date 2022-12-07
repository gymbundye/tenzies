import { useState } from 'react'
import './App.css'
import Tenzie from './Components/Tenzie'
import Instructions from './Components/Instructions'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main></main>
      <Instructions/>
       
    </div>
  )
}

export default App
