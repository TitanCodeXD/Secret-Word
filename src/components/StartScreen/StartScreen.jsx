import React from 'react';
import './StartScreen.css';

const StartScreen = ({startGame}) => {

  return (


    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar o Jogo!</button>

        <div className='creator'>
          <footer>
          <p>
    &copy; Created by
    <a class = "contact-success"href="https://codepen.io/titancodexd" target="_blank"
       ><strong> Wesley Roberto dos Santos.</strong></a>
  </p>
          </footer>
        </div>
    </div>
  )
}

export default StartScreen