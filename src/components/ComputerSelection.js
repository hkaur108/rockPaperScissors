import React, { useState } from 'react';
import { useContext } from 'react';
import { computerSelectionContext } from './Game';
import '../Game.css';

export default function ComputerSelection() {
  const [computersChoice,setcomputersChoice] =useContext(computerSelectionContext);
  return (
    <div className="container">
    <div className="row">
      <div className='col mx-auto m-1 m-2 p-2'>
      <h3 className='text-center text-capitalize  text-secondary'>{computersChoice}</h3>
    </div>
    </div>
    
    </div>
   
  )
}
