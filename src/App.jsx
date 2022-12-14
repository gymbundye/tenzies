import { useState } from 'react'
import './App.css'
import Tenzie from './Components/Tenzie'
import Instructions from './Components/Instructions'
import Die from './Components/Die'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Instructions/>

      <main>
        
        <div className='dice-box'>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        </div>
    
      </main>
      
       
    </div>
  )
}

export default App
