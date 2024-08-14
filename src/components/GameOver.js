import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../gameOver.css'

export default function GameOver() {
     const navigate= useNavigate();

    const handleClick=()=>{
        navigate('/')
    }

  return (
    <div className='gameOverBack w-100 vh-100 d-flex flex-column align-items-start '>
         <button onClick={handleClick} className='btn btn-outline-light mx-auto mt-4'>Play Again</button>
    </div>
  )
}
