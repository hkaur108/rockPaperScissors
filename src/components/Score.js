import React, { useEffect } from 'react';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {winner} from './CheckWinner';
import { useLocation } from 'react-router-dom';
import '../Game.css';

export default function Score() {

  const [computerScore,setcomputerScore] =useState(0);
  const [playerScore,setplayerScore] =useState(0);
   const location=useLocation();
  const name=location.state;


useEffect(()=>{
  if(!winner){
    return 
  }
  else{
    let getWinner= winner.split(" ")[0]
    const updateScores = (winner)=>{
  if(winner==="player"){
    return setplayerScore(playerScore=>playerScore+1)
  }
  else if(winner==="computer"){
    return setcomputerScore(computerScore=>computerScore+1)
  }
  else{
    return
  }
}
updateScores(getWinner)
  }
},[winner])




  
  return (
    <div className='container mx-auto'>
        <div className="row mx-auto">
            <div className="col-6 text-capitalize textColor"><h5 className='text-center'>{name.name}'s Scores: {playerScore}</h5></div>
            <div className="col-6 text-capitalize textColor"> <h5 className='text-center'>computer's Scores: {computerScore}</h5></div>
        </div>
    </div>
  )
}
