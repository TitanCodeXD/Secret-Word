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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);


  const pickWordAndCategory = () => {
    //Pick a random Category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] ;

    console.log(category)

    //Pick a random Word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word)

    return {word, category}
  };

//Starts
  const startGame = () => {
    //pickWord and pickCategory
    const {word, category} = pickWordAndCategory();

    //Create an Array of Letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((letra) => letra.toLowerCase())

    console.log(wordLetters);

    //Fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

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
