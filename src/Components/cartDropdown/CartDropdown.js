import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartDropdown.styles.scss";
import { CartContext } from "../contexts/Cart";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
