import React, { useContext } from 'react'
import Navbar from './Pages/Nav/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Hero from './Pages/Hero/Hero'
import Order from './Pages/Orders/Order'
import Footer from './Pages/Footer/Footer'


const App = () => {
  return (
    <div className=' justify-between '>
    <div className="navbars">
    <Navbar/>

    </div>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/' element={<Hero/>}/>
        
      </Routes> 
    <div className="footers">
    <Footer/>
    </div>
    </div>
  )
}

export default App
