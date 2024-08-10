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
      <Route path='/materiality' element={<Materiality/>} />
      <Route path='/risk-management' element={<RiskManagement/>} />
      <Route path='/strategy' element={<Strategy/>} />
      <Route path='/stakeholder-engagement' element={<Stakeholder/>} />
      {/* <Home/> */}
      {/* <Investor/> */}
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
