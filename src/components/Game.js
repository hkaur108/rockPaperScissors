import React, {useState,createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ComputerSelection from './ComputerSelection';
import PlayerSelection from './PlayerSelection';
import CheckWinner from './CheckWinner';
import Restart from './Restart';
import Heading from './Heading';
import Score from './Score';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Game.css';


export const Context = createContext();
export const winnerContext = createContext();
export const playerContext= createContext();
export const computerSelectionContext=createContext();


export default function Game() {

  const navigate= useNavigate();

  const exitGame =()=>{
    navigate('/gameOver')
  }
    
  const choices=["rock","paper","scissors"]
  const [startGame,setstartGame] = useState(false);
  const [playersChoice,setplayersChoice] = useState("");
  const [computersChoice,setcomputersChoice] =useState(choices[Math.floor(Math.random()*3)]);
  const location=useLocation();
  const name=location.state;
  
  return (
    
    <div className='mx-auto containerBackground'>
      <div className="container mx-auto ">
        <div className='row'>
          <div className="col">
            <Heading/>
          </div>
        </div>
        <div className='row'>
        <div className="col-12">
              <winnerContext.Provider value={[playersChoice,computersChoice]}>
                {(startGame) &&  <CheckWinner/>} 
            </winnerContext.Provider>
          </div>
        </div>
        <div className='row'>
          <div className="col"> 
              <Score/>
          </div>        
        </div>  
        <div className='row m-1 p-1'>
          <div className="col-6"><h6 className='text-center textColor text-capitalize'> {name.name}! Please make a selection</h6></div>
            <div className="col-6"><h6 className='text-center textColor'>Computer's Selection</h6></div>
        </div>
        <div className='row m-1 p-1'>
              <div className='col-5'> <Context.Provider value={[startGame,setstartGame]}>
                <playerContext.Provider value={[playersChoice,setplayersChoice]}>
                    <PlayerSelection/>
                </playerContext.Provider>
                </Context.Provider> </div>
            
            <div className="col-2 fw-bold text-center"><div className="display-4 textColor m-2">v/s</div></div>
          
          {(startGame) && (<div className='col-5'> 
            <computerSelectionContext.Provider value={[computersChoice,setcomputersChoice]}>
              <ComputerSelection  /> 
            </computerSelectionContext.Provider> 
            </div>)} 
        </div>
        <div className="row">
          <div className="col-6">
            <Context.Provider value={[startGame,setstartGame]}>
            {(startGame) && (<Restart/>)} 
            </Context.Provider>
          </div>
          <div className="col-6">
              <button className='btn btn-outline-success' onClick={exitGame}>Exit</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
