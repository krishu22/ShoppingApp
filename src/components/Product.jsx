import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/cartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Removed to Cart");
  };

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div>
        <img width={160} height={160} src={post.image} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>
        {cart.some((p) => p.id === post.id) ? (
          <p onClick={removeFromCart}>Remove Item</p>
        ) : (
          <p onClick={addToCart}>Add to Cart</p>
        )}
      </button>
    </div>
  );
};

export default Product;
