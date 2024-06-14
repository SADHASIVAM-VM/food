import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const CreatedContext = createContext();

const Contexts = (props) => {
  const [filters, setfilters] = useState("All");
  const [Searchs, SetSearchs]= useState(false)
  const [cartItems, setCartItems]= useState([])
  const [cartCount, setCartCount] = useState(0);
  const [loginon, setLogin]= useState(false)
  const [discount, setDiscount]= useState(0)

  const addCart = (props)=>{
   setCartItems([...cartItems, {...props, qty:1}])
  }


const removeFromCart =(id)=>{
  const filteredItems = cartItems.filter((item) => item.id !== id);
  setCartItems(filteredItems);
}
const getTotalValue =()=>{
  const total = cartItems.reduce((acc, current)=> acc + (current.price * current.qty), 0);

  return total
}




  const ContextValues = {
    food_list,
    filters,
    setfilters,
    addCart,
    removeFromCart,
    Searchs, SetSearchs,
    loginon, setLogin,
    getTotalValue,
    discount, setDiscount,
    cartItems, setCartItems
  };

  
 
  return (
    <CreatedContext.Provider value={ContextValues}>
      {props.children}
    </CreatedContext.Provider>
  );
};

export default Contexts;
