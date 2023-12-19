import { useDispatch } from "react-redux";
import "../Styles/Cart.css";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useCartSelector } from "../utils/appStore";
import { ReactElement } from "react";

const Cart = (): ReactElement => {
  const cartItems = useCartSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Cart</h1>
      <div className="item-card">
        <button className="clear-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1> Cart is Empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
