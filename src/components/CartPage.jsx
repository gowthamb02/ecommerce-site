import React , {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import './CartPage.css';

function Cart() {
    const navigate = useNavigate();
  const handleCartToProducts = (products) => {
    navigate('/productDetails', { state: { products } });
  };
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    totalItems,
    totalPrice,
  } = useContext(CartContext);
if (cartItems.length === 0) {
  return <h2 className="empty-cart">Cart is Empty</h2>;
}

return (
  <div className="cart-container">
    <h2 className="cart-heading">Shopping Cart</h2>

    {cartItems.map(item => (
      <div key={item.id} className="cart-item">

        <div className="item-info" onClick={()=>handleCartToProducts(item)} >
          <img
            src={item.image}
            alt={item.name}
            className="item-image"
          />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
        </div>

        <div className="qty-box">
          <button
            className="qty-button"
            onClick={() => decreaseQty(item.id)}
          >
            −
          </button>

         <span className="qty-number">{item.quantity}</span>


          <button
            className="qty-button"
            onClick={() => increaseQty(item.id)}
          >
            +
          </button>
        </div>

        <button
          className="remove-btn"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>

      </div>
    ))}

 <div className="summary">
  <h3>Total Items: {totalItems}</h3>
 <h3 className="total-price">Total Price:  <span className="total-amount"> ₹ {totalPrice} </span> </h3>


  <button
    className="buy-btn"
    onClick={() => alert("Order Placed Successfully!")}
  >
    Buy Now
  </button>
</div>

  </div>
);
}

export default Cart;





















