import React , {useContext}from 'react';
import { useLocation } from 'react-router-dom';
import './productDetails.css';
import { CartContext } from './CartContext';

function ProductDetails() {
  const location = useLocation();
  const product = location.state?.products;

  const {addToCart,} = useContext(CartContext);

  return (
    <div className="pd-container">
      <div className="pd-card">
        <div className="pd-image-section">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        
        <div className="pd-info-section">
          <h2 className="pd-title">{product.name}</h2>
          <p className="pd-rating">
            <strong>Rating:</strong> {product.rating} <span className="stars">⭐⭐⭐⭐⭐</span>
          </p>
          <h3 className="pd-price">₹{product.price}</h3>
          <p className="pd-description">{product.details}</p>

          <div className="pd-button-group">
            <button className="btn add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="btn buy-now"  onClick={() => alert("Order Placed Successfully!")}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;