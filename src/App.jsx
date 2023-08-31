//React
import { useState } from 'react'

//CSS
import './App.css'

//Data
import {wordsList} from './data/words';

//Components
import StartScreen from './components/StartScreen/StartScreen'
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';




  const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"},
  ];


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

//Starts
  const startGame = () => {
    setGameStage(stages[1].name)
  };

//Process the letter input 
const verifyLetter = () => {
  setGameStage(stages[2].name)
};


//Restarts the Game
const retry = () => {
  setGameStage(stages[0].name)
};


  return (
    <>
      <div className='App'>

        {gameStage === 'start' && <StartScreen startGame = {startGame}/>}
        {gameStage === 'game' && <Game verifyLetter = {verifyLetter}/>}
        {gameStage === 'end' && <GameOver retry = {retry}/>}
        

      </div>

    </>
  )
}

export default App
