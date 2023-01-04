import React from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Instructions from './Components/Instructions'
import Die from './Components/Die'

function App() 
  
  {
    const [dice, setDice] = React.useState(allNewDice())
    
    function generateNewDie() {
      return {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
      }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? 
              die :
              generateNewDie()
      }))
  }
  

    function holdDice(id){
      setDice(oldDice => oldDice.map( die => {
       return die.id === id ? 
       {...die, isHeld: !die.isHeld} :
       die 
      }))
    }
    
    const diceElements = dice.map(
      die => 
      <Die key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)}
      
      />
      )
    
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
