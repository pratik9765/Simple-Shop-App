
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className=" flex flex-col gap-4 m-3 mb-16 w-[500px] ">

        <div className="">
          <img src={item.image} width={200} className="" />
        </div>
        <div className="flex flex-col gap-6"> 
          <h1 className="text-2xl">{item.title}</h1>
          <h1 className="text-sm">{item.description}</h1>
          <div className="flex justify-between">
            <p>Price $ {item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
