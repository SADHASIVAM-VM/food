import React from 'react'
import './Header.css'
const Headers = () => {
  return (
    
          <div className="header mx-5 md:mx-20 ">
            <div className="header-cont absolute left-0 bottom-0 p-5 text-white md:top-[50%] ">
              <h1 className='text-sm md:text-6xl font-bold'>WELCOME TO THE TOMATO.</h1>
              <h4 className='text-sm md:text-2xl'>Save your Foods by Ordering here</h4>
              <button className='rounded-2xl  text-sm md:text-md border-2 px-3  md:w-90 w-50 py-2 mt-3 hover:bg-orange-400 '> Get Started</button>
            </div>
          </div>
        
  )
}

export default Headers
