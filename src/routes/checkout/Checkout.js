import { UserContext } from "../../Components/contexts/User";
import { CartContext } from "../../Components/contexts/Cart";
import "./Checkout.styles.scss";
import { useContext } from "react";
import CartItem from "../../Components/CartItem/CartItem";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((CartItem) => {
          const { id, name, quantity } = CartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemToCart(CartItem)}>decrement</span>
              <br />
              <span onClick={() => addItemToCart(CartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
