import React from 'react'
import Cover from '../Components/Cover/Cover'
import Leadership from '../Components/Leadership/Leadership'
import Messages from '../Components/Messages/Messages'
import Intro from '../Components/Intro/Intro'
import Capitals from '../Components/Capitals/Capitals'
import EightValues from '../Components/EightValues/EightValues'

const Home = () => {
  return (
    <div>
        <Cover/>
        <Intro/>
        <EightValues/>
        <Messages/>
        <Leadership/>
        <Capitals/>
    </div>
  )
}

export default Home