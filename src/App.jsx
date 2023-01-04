import React from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Instructions from './Components/Instructions'
import Die from './Components/Die'

function App() 
  
  {
    const [dice, setDice] = React.useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id :nanoid()
            })
        }
        return newDice
    }

    function rollDice() {
      setDice(allNewDice())
  }
    
    const diceElements = dice.map(
      die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />)
    
    return (
        <div className='game'>

          <Instructions/>
        <main>
            <div className="dice-box">
                {diceElements}
            </div>
            <button className='button' onClick={rollDice}>Roll</button>
            </main>
        </div>
    )

    }  

export default App
