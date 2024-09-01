import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../gameOver.css'

export default function GameOver() {
     const navigate= useNavigate();

    const handleClick=()=>{
        navigate('/')
    }

  return (
    <>
    <div className="container vw-100 vh-100 gameOverBack">
      <div className="row">
        <div className="col">
          <h1 className='text-center fw-bold text-light display-1 mt-5 py-5'>Game Over!</h1>
        </div>
      </div>
      <div className="row">
        <div className='col d-flex flex-column align-items-start '>
        <button onClick={handleClick} className='btn btn-light mx-auto mt-4'>Play Again</button>
    </div>
      </div>
    </div>
    
    </>
    
  )
}
