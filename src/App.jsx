import React from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Instructions from './Components/Instructions'
import Die from './Components/Die'
import Confetti from 'react-confetti'

function App() 
  
  {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] =React.useState(false)
    
    React.useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
          setTenzies(true)
          console.log("You won!")
      }
  }, [dice])
    
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
          {tenzies && <Confetti/>}
            <div className="dice-box">
                {diceElements}
            </div>

            <button className='button'
             onClick={rollDice}>
            {tenzies ? "New Game" : "Roll"}
            </button>
            
            </main>
        </div>
    )

    }  

export default App
