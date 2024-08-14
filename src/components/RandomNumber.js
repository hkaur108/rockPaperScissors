import React, { useState } from 'react'

export default function RandomNumber() {
    const [randomVal,setrandomVal] = useState(Math.floor(Math.random()*3))


    console.log(randomVal)
  return (
    <div>
      {randomVal}
    </div>
  )
}
