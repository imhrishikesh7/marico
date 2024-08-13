import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import  Navigation  from './Components/Navbar/Navigation';
import Footer from './Components/Footer/Footer';
import Investor from './Pages/Investor';
import Materiality from './Pages/Materiality';
import RiskManagement from './Pages/RiskManagement';
import Strategy from './Pages/Strategy';
import Stakeholder from './Pages/Stakeholder';
import Consumers from './Pages/Consumers';
import People from './Pages/People';
import ValueChainPartners from './Pages/ValueChainPartners';
import Communities from './Pages/Communities';
import EnvironmentMain from './Pages/Environment/EnvironmentMain';
import BusinessModel from './Pages/BusinessModel';
import KeyPerf from './Pages/KeyPerf';


function App() {


  return (
    <div className='containerx'>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Navigation/>
      {/* <Header/> */}

      <div className='content '>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/key-performance' element={<KeyPerf/>} />
      <Route path='/materiality' element={<Materiality/>} />
      <Route path='/business-model' element={<BusinessModel/>} />
      <Route path='/risk-management' element={<RiskManagement/>} />
      <Route path='/strategy' element={<Strategy/>} />
      <Route path='/stakeholder-engagement' element={<Stakeholder/>} />
      <Route path='/investors' element={<Investor/>} />
      <Route path='/consumers' element={<Consumers/>} />
      <Route path='/people' element={<People/>} />
      <Route path='/value-chain-partners' element={<ValueChainPartners/>} />
      <Route path='/communities' element={<Communities/>} />
      <Route path='/environment' element={<EnvironmentMain/>} />
      {/* <Home/> */}
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
