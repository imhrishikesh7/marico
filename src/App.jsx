import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';


function App() {


  return (
    <div className='containerx'>
      <BrowserRouter>
      <Navbar/>
      <div className='content '>
      {/* <Routes> */}
      {/* <Route path='/' element={<Home />} /> */}
      <Home/>
      {/* </Routes> */}
      </div>
     
      </BrowserRouter>
    </div>
  )
}

export default App
