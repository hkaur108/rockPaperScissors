import React, { useContext } from 'react';
import { winnerContext } from './Game';
import { useLocation } from 'react-router-dom';
 
export let winner;

export default function CheckWinner() {
  const [playersChoice,computersChoice]=useContext(winnerContext)
  const location=useLocation();
  const name=location.state;

const winnerLogic=  (player,computer)=>{

    if(player==="rock" && computer ==="paper"){
      return winner="computer won!";

    }
    else if(player==="rock" && computer ==="scissors"){
        return winner="player";
    
    }
    else if(player==="rock" && computer ==="rock"){
        return winner="it is a draw!";
    
    }
    else if(player==="scissors" && computer ==="paper"){
      return winner="player";
    }
    else if(player==="scissors" && computer ==="scissors"){
      return winner=" it is a draw!";
    }
    else if(player==="scissors" && computer ==="rock"){
      return winner="computer Won!";
    }
    else if(player==="paper" && computer ==="paper"){
        return winner="it is a draw!";
    }
    else if(player==="paper" && computer ==="scissors"){
          return winner="computer Won!";
        
    }
    else if(player==="paper" && computer ==="rock"){
      return winner="player";
        
    }

  }
winnerLogic(playersChoice,computersChoice);



  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <h3 className='text-secondary fw-bold text-capitalize text-center'> {(winner==="player")?(winner=name.name) +" Won!":(winner)}</h3>
        </div>
      </div>
    </div>
  )
}


