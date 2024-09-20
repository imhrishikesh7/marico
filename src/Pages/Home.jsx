import React from 'react'
import Cover from '../Components/Cover/Cover'
import About from '../Components/About/About'
import Carousel from '../Components/Carousel/Carousel'
import ProductFilter from '../Components/ProductFilter/ProductFilter'
import Financial from '../Components/Financial 2/Financial'
import Leadership from '../Components/Leadership/Leadership'
import Messages from '../Components/Messages/Messages'
import { StickyScroll } from '../Components/Carousel/SliderNew'
import Intro from '../Components/Intro/Intro'
import SwiperComponent from '../Components/ProductFilter/SwiperComponent'
import Capitals from '../Components/Capitals/Capitals'
import EightValues from '../Components/EightValues/EightValues'

const Home = () => {
  return (
    <div>
        <Cover/>
        <Intro/>
        {/* <About/> */}
        <Messages/>
        <div className='my-5 '>
        {/* <Carousel/> */}
        <EightValues/>
        {/* <ProductFilter/> */}
        {/* <SwiperComponent/> */}
        {/* <Financial/> */}
        {/* <StickyScroll/> */}
        <Capitals/>
        <Leadership/>
      
        </div>
    </div>
  )
}

export default Home