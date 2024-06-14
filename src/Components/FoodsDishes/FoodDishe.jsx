import { useContext } from "react";
import { assets } from "../../assets/assets";
import { CreatedContext } from "../../context/Contexts";

const FoodDishe = (props) => {
  const { id, name, imgs, desc, price } = props
  const { cartCount, carttoadd,removeFromCart,addCart} = useContext(CreatedContext);

  return (
    <div className="md:w-[250px] w-[200px] shadow-lg relative">
      <img src={imgs} alt={name} className="rounded-lg" />
      <div className="flex justify-between items-center mx-2">
        <h1 className="text-md text-center font-bold">{name}</h1>
        <img src={assets.rating_starts} className="h-[10px] mr-1" alt="rating" />
      </div>
      <div className="body my-2 px-2">
        <p className="text-sm text-gray-500">{desc}</p>
        <p className="font-bold font-mono">price : <span className="text-orange-600 price font-bold">${price}</span></p>
      </div>
      {/* <div className="btn grid mb-1">
        <button className="bg-orange-500 px-2 rounded-b-md text-white py-1">Buy Now</button>
      </div> */}

      <div className="add_icon absolute right-0 top-[100px] z-10 md:top-[145px]">
      
          <img src={assets.add_icon_white} alt="rating"  onClick={() => addCart(props)}/>
        
      </div>
    </div>
  );
};

export default FoodDishe;
