import React, {useContext, useEffect} from 'react';
import {option} from './Choices';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Context} from './Game';
import { playerContext } from './Game';
import '../Game.css';

export default function PlayerSelection() {
    const [startGame,setstartGame] = useContext(Context);
    const [playersChoice,setplayersChoice] = useContext(playerContext);
   
const handleClick=(id)=>{
    setstartGame(!startGame);
    const playerval= option.find((item)=>item.id===id)
    setplayersChoice(playerval.selection)
}



    const optionButtons= option.map((item)=>{
            return (
                    <div key={item.id} className='m-1'>
                    <button onClick={()=>handleClick(item.id)} disabled={startGame?true:false} className='col-4 w-100  text-wrap btn btn-secondary btn-sm text-left text-capitalize'>{item.selection}</button>
                  </div>) 
                })

  return (
    <div>
      <div className='container w-100  p-2 m-2 mx-auto'>
        <div className="row">
          <div className="col ">
              <h3 className=" text-capitalize text-center text-secondary">{(startGame) && (playersChoice)}</h3>
          </div>
        </div>
          </div>
          <div className="container">
          <div className="row">
            <div className='col-6 d-flex align-items-start justify-content-start text-secondary' > 
              {optionButtons}
            </div>
          </div>
        </div>
      
      </div>
  )
}

