import { useState } from 'react'
import './App.css'
import Tenzie from './Components/Tenzie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Tenzie/>
       
    </div>
  )
}

export default App
