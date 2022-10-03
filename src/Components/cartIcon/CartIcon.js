import { useContext } from "react";
import { CartContext } from "../contexts/Cart";
import { ReactComponent as ShoppingIcon } from "../../assets/shopbag.svg";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="icon-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
