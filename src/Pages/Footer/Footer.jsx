import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className=' bg-black text-white '>
     <div className="mt-10  grid md:grid-cols-3 md:justify-center gap-5 ml-5 items-center my-10"> 
        <div className="box1 mt-10">
            <img src={assets.logo} alt="" /> 
            <div className="cont px-2 flex flex-col gap-3 ">
              <p className='text-sm md:text-lg mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, suscipit!</p>
              <div className="socialIcon flex gap-3 ">
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.facebook_icon} alt="" />
              </div>
            </div>
        </div>

        <div className="box2 my-2  flex flex-col justify-center md:items-center ">
                <p>Home</p>
                <p>Mobile-App</p>
                <p>website</p>
                <p>offical-Doc</p>
        </div>
        <div className="box3 my-2">
            <h1 className='text-4xl my-5'>GET IN TOUCH</h1>
            <p>+91 9831238903</p>
            <p>E-mail : sadhasivam47474@gmail.com</p>
        </div>

     </div>
     <hr />
<h4 className='text-center py-4'>Copy right by tomato @2024</h4>
    </div>
  )
}

export default Footer
