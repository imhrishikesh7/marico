import React from 'react'
import Headings from '../Components/Headings/Headings'

const BoardMembers = () => {
    const members = [
        '/people/Members/Harsh.png',
        '/people/Members/Saugata.png',
        '/people/Members/Ananth.png',
        '/people/Members/Apurva.png',
        '/people/Members/Milind.png',
        '/people/Members/Nayantara.png',
        '/people/Members/Nikhil.png',
        '/people/Members/Rajan.png',
        '/people/Members/Rajendra.png',
        '/people/Members/Rajeev.png',
        '/people/Members/Rishabh.png',
      ]

    return (
        <div className='marginal'>
            <b className='fs-4 my-4'>OUR LEADERSHIP</b>
            <Headings
                he1={"Know our Board"}
                he2={"Members"}
                clr2={"#efa5b1"}
                clr={"#efa5b1"}
            />
            <div className='mt-4 md:flex flex-wrap md:justify-between'>
            {members.map((image, index) => (
              <div
                key={index}
                className="carousel-slide md:w-[24%]"
              >
                <img src={image} className="cimage my-4" />
              </div>
            ))}
            </div>
        </div>
    )
}

export default BoardMembers