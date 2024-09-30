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
import CorporateInfo from './Pages/CorporateInfo';
import MdMsg from './Pages/MdMsg';
import ChairmanMsg from './Pages/ChairmanMsg';
import AboutMarico from './Pages/AboutMarico';
import GlobalFootprint from './Pages/GlobalFootprint';
import Awards from './Pages/Awards';
import ScrollToTop from './Components/ScrollToTop';
import SwiperComponent from './Components/ProductFilter/SwiperComponent';
import ManagementTeam from './Pages/ManagemetTeam';
import BoardMembers from './Pages/BoardMembers';


function App() {


  return (
    <div className='containerx'>
      <BrowserRouter>
      <ScrollToTop/>
      {/* <Navbar/> */}
      <Navigation/>
      {/* <Header/> */}

      <div className='content '>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-marico' element={<AboutMarico />} />
      <Route path='/global-footprint' element={<GlobalFootprint />} />
      <Route path='/message-from-md-ceo' element={<MdMsg />} />
      <Route path='/chairmans-message' element={<ChairmanMsg />} />
      <Route path='/key-performance' element={<KeyPerf/>} />
      <Route path='/materiality' element={<Materiality/>} />
      <Route path='/business-model' element={<BusinessModel/>} />
      <Route path='/risk-management' element={<RiskManagement/>} />
      <Route path='/strategy' element={<Strategy/>} />
      <Route path='/board-of-directors' element={<BoardMembers/>} />
      <Route path='/management-team' element={<ManagementTeam/>} />
      <Route path='/stakeholder-engagement' element={<Stakeholder/>} />
      <Route path='/investors' element={<Investor/>} />
      <Route path='/consumers' element={<Consumers/>} />
      <Route path='/people' element={<People/>} />
      <Route path='/value-chain-partners' element={<ValueChainPartners/>} />
      <Route path='/communities' element={<Communities/>} />
      <Route path='/environment' element={<EnvironmentMain/>} />
      <Route path='/corporate-information' element={<CorporateInfo/>} />
      <Route path='/awards-accolades' element={<Awards/>} />
      <Route path='/product-showcase' element={<SwiperComponent/>} />
      {/* <Home/> */}
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
