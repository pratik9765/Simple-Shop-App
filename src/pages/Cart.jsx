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
    <div className="">
  {
    cart.length > 0  ? 
    (<div className="flex w-full h-full mx-auto justify-center gap-32 align-middle  ">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col gap-10 justify-start mt-10">

        <div>
          <div>Your Cart Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button className="px-2 py-1 bg-green-400 mt-3 rounded-md hover:bg-green-600 hover:font-bold hover:text-white">
            Checkout Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col items-center gap-6  justify-center mt-44"> 
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-800 hover:text-white">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
