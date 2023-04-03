import './App.css'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  // const location = useLocation()
  return (
    <>
    <Navbar></Navbar>
    {/* {
      location.pathname === '/' && <Home></Home>
    } */}
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
