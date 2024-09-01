import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Home.css";


export default function Home() {

    const [name,setname] = useState("")
    const navigate= useNavigate();

 
    const handleClick=()=>{
        navigate('/game', {state:{name:name}})

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setname(e.target.value)
    }


  return (
    <div className='rockBack vw-100 vh-100 '>
     <div className="container text-light w-100 vh-100 d-flex flex-column align-items-center justify-content-center">
     <div className="row">
        <div className="col">
            <div className="display-2 p-2 satisfy-regular">Let's Play</div>
        </div>
     </div>
     
     <div className="row">
        <div className="col">
            <h6 className='p-1 bebas-neue-regular display-4'>Rock Paper Scissors!</h6>
        </div>
     </div>
        <div className="row ">
            <div className="col ">
                <form action="" onSubmit={handleSubmit} className='d-flex flex-column align-items-center justify-content-center'>
                    <input 
                    className='text-capitalize text-center' 
                    type="text" placeholder='enter your name:' 
                    value={name} 
                    onChange={(e)=>setname(e.target.value)} 
                    autoComplete='off'
                    name='name' 
                    id='name'
                    width={"200px"}
                    required
                    maxLength={25}
                    pattern="[A-Za-z]+" 
                    title="Name should only contain letters and spaces."/><br/>
                    {(name) && (<button type ="submit" onClick={handleClick} className='btn btn-outline-light btn-block'>Start Game!</button>)} 
                </form>
            </div>
        </div>
    </div>
    </div>
)
}
