//React
import { useCallback, useEffect, useState } from 'react'

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

  const guessesNumber = 3;  //Variável para Número de Tentativas

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesNumber);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //Pick a random Category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] ;


    //Pick a random Word
    const word = words[category][Math.floor(Math.random() * words[category].length)];


    return {word, category}
  }, [words]);


  window.onload = function() {
    retry();
    };

//Starts
  const startGame = useCallback(() => {
    //Clear all letters
    clearLetterStates();

    //pickWord and pickCategory
    const {word, category} = pickWordAndCategory();

    //Create an Array of Letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((letra) => letra.toLowerCase())

    //Fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

//Process the letter input 
const verifyLetter = (letter) => {
  const normalizedLetter = letter.toLowerCase();

  // Check if letter has already been utilized
  if (guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)) {
     return;
  }

  //Push guessedLetter or remove a chance/guess
  if (letters.includes(normalizedLetter)) {
    setGuessedLetters((actualGuessedLetters) => [
      ...actualGuessedLetters, 
      normalizedLetter,
    ])

  } else {
    setWrongLetters((actualWrongLetters) => [
      ...actualWrongLetters, 
      normalizedLetter,
    ]);

    setGuesses((actualGuesses) => actualGuesses - 1)
  }
};

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //Check if hesses ended
  useEffect(() => {
    if (guesses <= 0) {
      //Reset all states
      clearLetterStates();

      setGameStage(stages[2].name)
    }
  }, [guesses]);

  //Check Win Condition
useEffect(() => {

  const uniqueLetters = [... new Set(letters)]

  // Win Condition
  if (guessedLetters.length === uniqueLetters.length) {

    //Add Score
    setScore((actualScore)=> actualScore += 100);

    //Restart game with a new word
    startGame();
  }

}, [guessedLetters, letters, startGame]);

  //Restarts the Game
const retry = () => {
  setScore(0);
  setGuesses(guessesNumber);
  setGameStage(stages[0].name);
};


  return (
    <>
      <div className='App'>

        {gameStage === 'start' && <StartScreen startGame = {startGame}/>}
        {gameStage === 'game' && <Game 
        verifyLetter = {verifyLetter} 
        pickedWord = {pickedWord} 
        pickedCategory = {pickedCategory} 
        letters = {letters}
        guessedLetters = {guessedLetters}
        wrongLetters = {wrongLetters}
        guesses = {guesses}
        score = {score}
        />}
        {gameStage === 'end' && <GameOver 
        retry = {retry}
        score = {score}
        />}
        

      </div>

    </>
  )
}

export default App
