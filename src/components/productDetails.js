import React from 'react'
import { useLocation } from 'react-router-dom'

function ProductDetails() {

  const location = useLocation()
  const product = location.state?.products

  return (
    <div style={{ padding: "40px" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", margin: "20px 0" }}
      />
      <h3>₹{product.price}</h3>
      <p><strong>Rating:</strong> {product.rating} ⭐</p>
      <p>{product.details}</p>
    </div>
  )
}

export default ProductDetails
