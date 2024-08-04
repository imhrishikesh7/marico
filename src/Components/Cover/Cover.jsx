import React from 'react'
import "./Cover.css"
const Cover = () => {
  return (
    <div className='cov'>
      <video autoPlay muted loop
        style={{
          width: "100%"
        }}
      >
        <source src="./homepage/M_1.webm" />
      </video>
        <div className='themeline'>
          <h2>Delivering value...</h2>
          <h1>The</h1>
          <h1>Mar<span>i</span>co</h1>
          <h1>Way</h1>
        </div>

    </div>
  )
}

export default Cover