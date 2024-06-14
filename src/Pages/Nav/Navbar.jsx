import React, { useState, useContext } from "react";
import "./Nav.css";
import logo from '../../assets/logo.png'
import {assets} from '../../assets/assets'
import Search from "../../Components/Searchs/Search";
import { useNavigate } from "react-router-dom";
import { CreatedContext } from "../../context/Contexts";


const Navbar = () => {
  const [statues,setStatues]= useState('');
  const[Searchs, SetSearchs] =useState(false)
const {loginon, setLogin,cartItems} = useContext(CreatedContext)

  const navigate =  useNavigate()

  return (
    <>
    <nav className="pt-5  p-1 relative"> 

      <section className="container mx-auto px-5">
        <div className="navbar flex justify-between">
          <div className="logo">
            <img src={logo} alt="" onClick={()=> navigate('/')}/>
          </div>
          <div className="Navlist hidden md:block cursor-pointer">
              <ul className="flex gap-2">
                <li onClick={()=> setStatues("home")} className={statues === "home"? 'active border-b-2 border-green-500':''}>Home</li>
                <li onClick={()=> setStatues("trends")} className={statues === "trends"? 'active border-b-2  border-green-500':''}>trends</li>
                <li onClick={()=> setStatues("menu")} className={statues === "menu"? 'active border-b-2 border-green-500':''}>menu</li>
                <li onClick={()=> setStatues("contact")} className={statues === "contact"? 'active border-b-2 border-green-500':''}>contact us</li>
              </ul>
          </div>
          <div className="cartNav flex gap-3 items-center relative">
            
            <img src={assets.search_icon} alt="search" className=" h-[20px] " onClick={()=> SetSearchs(!Searchs)}/>
            <img src={assets.basket_icon} alt="cart" className=" h-[20px] "  onClick={()=> navigate('/cart')}/>
            {cartItems &&
              cartItems.length !=0 ? (<img src={assets.selector_icon} className="absolute top-1 right-[82px] w-3"/>): <></>
            }

           
            <button className="px-3 py-1 rounded-2xl  border-2 hover:bg-gray-100" onClick={()=> setLogin(!loginon)}>sign up</button>
          </div>
        </div>
      </section>
    </nav>
    
    </>
  )
};

export default Navbar;
