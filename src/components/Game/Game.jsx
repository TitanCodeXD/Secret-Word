import React from 'react'
import './Game.css';


const Game = ({
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    wrongLetters,
    letters,
    guessedLetters,
    guesses,
    score  
}) => {

  return ( 

    <div className = "game font">

        <p className = "points">
        <span>Pontuação: {score}}</span>
        </p>

        <h1>Adivinhe a Palavra:</h1>

        <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativa(s).</p>
        
        <div className='wordContainer'>

        {letters.map((letter, i) => (guessedLetters.includes(letter) ? (<span key = {i} className="letter">{letter}</span>)  :  (<span key = {i} className='blackSquare'></span>) ))}

        </div>

        <div className='letterContainer'>
            <p>Tente adivinhar uma letra da palavra:</p>
            <form>
                <input type='text' name= "letter" maxLength="1" required></input>
                <button>Jogar!</button>
            </form>
        </div>
        <div className='wrongLettersContainer'>
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, i) => (<span key = {i}>{letter},</span>))}
        </div>

    </div>

  )
}

export default Game