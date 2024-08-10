import React from 'react'
import Cover from '../Components/Cover/Cover'
import About from '../Components/About/About'
import Carousel from '../Components/Carousel/Carousel'
import ProductFilter from '../Components/ProductFilter/ProductFilter'
import Financial from '../Components/Financial 2/Financial'
import Leadership from '../Components/Leadership/Leadership'
import Messages from '../Components/Messages/Messages'
import ValueChainPartners from './ValueChainPartners'
import Communities from './Communities'
import EnvironmentMain from './Environment/EnvironmentMain'

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
        <Leadership/>
        <ValueChainPartners/>
        <Communities/>
        <EnvironmentMain/>
        </div>
    </div>
  )
}

export default Home