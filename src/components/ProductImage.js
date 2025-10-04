import React from "react";
import product from "../product"; // Import product data

function ProductImage() {
  return (
    <img 
      src={product.image} // Use product image
      alt={product.name} // Set alt text to product name
      className="img-fluid rounded" // Bootstrap styling
    />
  );
}

export default ProductImage; // Export component
