import React, { useContext, useState } from 'react'
import {menu_list } from '../../assets/assets'
import './Product.css'
import { CreatedContext } from '../../context/Contexts'
const Product = () => {
  const {setfilters, filters} = useContext(CreatedContext)
  const [Imgname, setImgname] =useState('');
    
  return (
    <div className='md:px-[50px] px-5 mb-10'>
      <h1 className='font-bold  md:text-4xl text-2xl md:pl-6 my-3 uppercase'>Feature List</h1>
    <div className="flex overflowscroll gap-2 ">
    
    {
        menu_list.map((itms, index)=> (
            <div className="menu_items mx-auto" key={index}>
               <div className="imgcont md:w-[100px] md:h-[100px] w-[60px]">
               <img src={itms.menu_image} alt=""  
               className={Imgname == itms.menu_name?'hoverline   ': ' ' + "hover:p-1 hoverborder cursor-pointer" } onClick={()=> {
                setfilters(itms.menu_name)
                setImgname(itms.menu_name);
               }}/>
               </div>
               <p className='text-center md:text-xl'>{itms.menu_name}</p>
            </div>
        ))
      }
    
      </div>
      <hr />
    </div>
   
  )
}

export default Product
