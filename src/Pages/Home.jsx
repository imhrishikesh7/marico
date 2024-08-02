import React from 'react'
import Cover from '../Components/Cover/Cover'
import About from '../Components/About/About'
import Carousel from '../Components/Carousel/Carousel'

const Home = () => {
  return (
    <div>
        <Cover/>
        {/* <About/> */}
        <div className='my-5 '>
        <Carousel/>
        </div>
    </div>
  )
}

export default Home