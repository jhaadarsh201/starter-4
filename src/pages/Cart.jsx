import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div >
  {
    cart.length > 0  ? 
    (<div className="flex flex-row justify-evenly">


      <div className="flex flex-col justify-evenly items-center space-between ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col item-center m-10">

        <div>
          <div className="bg-gray-950 text-zinc-200 font-bold text-5xl">Your Cart</div>
          <div className="text-stone-950 bg-zinc-100 font-semibold text-[80px]">Summary</div>
          <p>
            <span className=" text-zinc-200 bg-gray-950 font-bold text-4xl p-2">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center m-36 p-2">
          <p className="text-zinc-200 bg-gray-950 font-bold text-4xl">Total Amount: ${totalAmount}</p>
          <button className="text-zinc-200 border-2 border-gray-700 rounded-full font-bold 
          text-[20px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-stone-950 hover:font-semibold transition duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col items-center justify-between item  py-52">
      <h1 className="text-white-700 font-bold text-5xl m-3">Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-3xl p- px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
