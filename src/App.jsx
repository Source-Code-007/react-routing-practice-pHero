import './App.css'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  // const location = useLocation()
  return (
    <div className='overflow-hidden'>
    <Navbar></Navbar>
    {/* {
      location.pathname === '/' && <Home></Home>
    } */}
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default App
