import React from 'react';
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { remove } from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

        const dispatch = useDispatch(); // when you want to use a reducer

        const removeFromCart = () => {
                dispatch(remove(item.id));
                toast.success("Item Removed");
        }
 
  return (
    <div>
      <div>
        <div>
                <img src={item.image} />
        </div>
        <div>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <div>
                        <p>{item.price}</p> 
                        <div onClick={removeFromCart}>
                                <FcDeleteDatabase/>
                        </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
