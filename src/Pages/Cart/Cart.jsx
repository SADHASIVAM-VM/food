import React, { useContext, useState } from 'react'
import './Cart.css'
import { CreatedContext } from '../../context/Contexts'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
const [promo, setPromo]=useState('')
const navigate = useNavigate()
const {cartItems,setCartItems, removeFromCart,getTotalValue ,discount,setDiscount} = useContext(CreatedContext)

const cngQty =(id, qty)=>{
  const changedQty =  Math.max(1, cartItems.find((item) => item.id === id).qty +qty)
  setCartItems(  cartItems.map((item) => (item.id === id ? { ...item, qty: changedQty } : item)))
}

  return (
   <>
   {
    true === true ?
    <div>
    <div className="cards_title grid grid-cols-5 place-items-center mx-2 my-5 " >
      <p className='font-bold'>Items</p>
      <p className='font-bold'>Title</p>
      <p className='font-bold'>Price</p>
      <p className='font-bold'>Qunatity</p>
      <p className='font-bold'>Remove</p>
    </div>

   <div className="cont">
{
cartItems.map((itms,index)=> {
  
    return(
      
    <div className=" grid grid-cols-5 my-2 place-items-center  bg-gray-100 py-2" key={index}>
    <img src={itms.imgs} alt="" className='h-[50px] ml-2'/>
    <p>{itms.name}</p>
    <p>${itms.price}</p>
 
            <div className="extraAdd flex bg-white rounded-lg justify-between gap-2 items-center">
              <img src={assets.remove_icon_red} alt="" onClick={()=> cngQty(itms.id, -1)} />
              <p>{itms.qty}</p>
              <img src={assets.add_icon_green} alt="" onClick={()=> cngQty(itms.id, 1)}/>
            </div>
    <button onClick={()=> removeFromCart(itms.id)}> <img src={assets.remove_icon_red} alt="" /></button>
</div>
    )
  }
)
}
<hr className='px-4'/>
</div>
<div className="flex  flex-col-reverse md:flex-row md:justify-between mx-10  md:mx-20 items-center">

<div className="box1 flex flex-col my-10 w-[400px] gap-3">
<div className="subtotal flex justify-between ">
<p>SubToatal</p>
<p>${getTotalValue()}</p>
</div>
<div className="delivery  flex justify-between">
<p>Delevery Fee</p>
<p>{discount ? <del className='text-red-400'>$2</del>:"$2"}</p>
</div>
<hr />
<div className="total  flex justify-between">
<h5>Toatal</h5>
<p>{discount>0? <span className="text-green-500">${getTotalValue()-discount}</span>:getTotalValue()+2 }</p>
</div>
{
  cartItems == 0 ?<button className='bg-orange-300 p-1 text-white rounded-sm my-2 cursor-not-allowed' disabled onClick={()=> navigate('/order')}>place Order</button> 
  :<button className='bg-orange-400 p-1 text-white rounded-sm my-2' onClick={()=> navigate('/order')}>place Order</button>
}
</div>
<div className="box2 my-10">

<div className="form flex justify-center">
  <form action="" className='flex' onSubmit={(e)=> e.preventDefault()}>
    <input type="text" className='border-2 rounded-x-md md:w-[400px] p-1' placeholder='Enter V45 ' value={promo} onChange={(e)=> setPromo(e.target.value)}/>
    <button className='bg-orange-400 text-white px-2' onClick={()=> {
      if(promo === 'V45'){
        setDiscount(20)
      }
      setPromo('')
    }}>Submit</button>
  </form>
</div>

</div>

</div>
</div>
:<div>
  <img src={assets.noitms} alt="" />
</div>
   }
   </>
  )
}

  


export default Cart
