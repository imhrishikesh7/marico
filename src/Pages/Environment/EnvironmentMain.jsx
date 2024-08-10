import React from 'react'
import Message from './Components/Message';
import Impact from './Components/Impact';
import StewardsJourney from './Components/StewardsJourny';

const EnvironmentMain = () => {
  return (
    <div className='main-environment-container'>
      <Message/>
      <Impact/>
      <StewardsJourney/>
    </div>
  )
}

export default EnvironmentMain;
