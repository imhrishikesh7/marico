import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import  Navigation  from './Components/Navbar/Navigation';
import Footer from './Components/Footer/Footer';


function App() {


  return (
    <div className='containerx'>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Navigation/>
      {/* <Header/> */}
      <div className='content '>
      {/* <Routes> */}
      {/* <Route path='/' element={<Home />} /> */}
      <Home/>
      {/* </Routes> */}
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
