import React, { useContext } from 'react'
import './FoodList.css'
import FoodDishe from '../FoodsDishes/FoodDishe'
import { CreatedContext } from '../../context/Contexts'

const FoodList = () => {
  const { food_list, filters } = useContext(CreatedContext)
  return (
    <div className='mx-5 '>
      <h1 className='text-xl md:text-2xl mb-6 md:ml-5 font-bold'>HAPPY TO HAVE YOUR MEALS</h1>
      <div className="flex flex-col md:flex-row flex-wrap flex-shrink-0 flex-1 justify-center items-center gap-5">
        {
          food_list.map((itms, index) => {
            if (filters === itms.category || filters === "All") {
              return (
                <FoodDishe key={index} id={itms._id} name={itms.name} desc={itms.description} imgs={itms.image} price={itms.price} category={itms.category} />
              )
            }
            return null;
          })
        }
      </div>
    </div>
  )
}

export default FoodList
