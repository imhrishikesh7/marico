import React from 'react'
import Headings from '../Components/Headings/Headings'

const Awards = () => {
  return (
    <div className='marginal my-4'>
        <b className='fs-4 mt-4'>AWARDS AND ACCOLADES</b>
            <Headings
                he1={"Recognised for continued"}
                he2={"excellence"}
                clr2={"#a4cf57"}
                clr={"#a4cf57"}
            />
            <img src="./awards/award1.jpg" alt="" />
            <img src="./awards/award2.jpg" alt="" />
    </div>
  )
}

export default Awards