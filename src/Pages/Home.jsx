import React from 'react'
import Cover from '../Components/Cover/Cover'
import About from '../Components/About/About'
import Carousel from '../Components/Carousel/Carousel'
import ProductFilter from '../Components/ProductFilter/ProductFilter'
import Financial from '../Components/Financial 2/Financial'
import Leadership from '../Components/Leadership/Leadership'
import Messages from '../Components/Messages/Messages'
import { StickyScroll } from '../Components/Carousel/SliderNew'

const Home = () => {
  return (
    <div>
        <Cover/>
        <About/>
        <Messages/>
        <div className='my-5 '>
        <Carousel/>
        <ProductFilter/>
        <Financial/>
        {/* <StickyScroll/> */}
        <Leadership/>

      
        </div>
    </div>
  )
}

export default Home