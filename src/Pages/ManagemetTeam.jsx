import React from 'react'
import Headings from '../Components/Headings/Headings'

const ManagementTeam = () => {
    const team = [
      '/people/Team/Saugata.png',
      '/people/Team/Amit.png',
      '/people/Team/Amit Praskash.png',
      '/people/Team/Ashish.png',
      '/people/Team/Shillpa.png',
      '/people/Team/Pawan.png',
      '/people/Team/Samasree.png',
      '/people/Team/Vaibhav.png',
      '/people/Team/Vrijesh.png',
      ]

    return (
        <div className='marginal'>
            <b className='fs-4 my-4'>OUR LEADERSHIP</b>
            <Headings
                he1={"Know our Management"}
                he2={"Team"}
                clr2={"#9484be"}
                clr={"#9484be"}
            />
            <div className='mt-4 md:flex flex-wrap md:justify-between'>
            {team.map((image, index) => (
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

export default ManagementTeam