import React from 'react'
import Cover from '../Components/Cover/Cover'
import About from '../Components/About/About'
import Carousel from '../Components/Carousel/Carousel'
import ProductFilter from '../Components/ProductFilter/ProductFilter'
import Financial from '../Components/Financial 2/Financial'

const Home = () => {
  return (
    <div>
        <Cover/>
        <About/>
        <div className='my-5 '>
        <Carousel/>
        <ProductFilter/>
        <Financial/>
        </div>
    </div>
  )
}

export default Home