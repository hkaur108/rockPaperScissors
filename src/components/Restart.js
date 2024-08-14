import React, { useState,useContext } from 'react'
import {Context} from './Game';
import { playerContext } from './Game';



export default function Restart() {
      const [startGame,setstartGame] = useContext(Context);
      // const [playersChoice,setplayersChoice] = useContext(playerContext);



    const handleClick =()=>{
      setstartGame(!startGame)

      }
  return (
    <div className='container'>
      <div className="row ">
        <div className="col d-flex justify-content-center">
            <button onClick={handleClick} className='btn btn-outline-primary btn-block'>Play Again</button>
        </div>
      </div>
    </div>
  )
}
