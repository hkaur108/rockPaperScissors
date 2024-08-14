import React from 'react';
import Game from './components/Game';
import {Route, Routes,route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import GameOver from './components/GameOver';



export default function App() {
  const navigate = useNavigate();

    const goToGame=()=>{
      navigate('/game')

    }

    const gameOver=()=>{
      navigate('/gameOver')

    }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/gameOver' element={<GameOver/>}/>     
      </Routes>
    </div>
  )
}
