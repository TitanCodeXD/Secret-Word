import React from 'react'
import './Game.css';


const Game = ({verifyLetter}) => {

  return ( 

    <div className = "game font">

        <p className = "points">
        <span>Pontuação: 0000</span>
        </p>

        <h1>Adivinhe a Palavra:</h1>

        <h3 className='tip'>
        Dica sobre a palavra: <span>Dica...</span>
        </h3>
        
        <div className='wordContainer'>

        <span className='letter'>A</span>
        <span className='letter'>A</span>
        <span className='letter'>A</span>
        <span className='blackSquare'>a</span>

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
        <span>A,</span>
        <span>B,</span>
        </div>

    </div>

  )
}

export default Game