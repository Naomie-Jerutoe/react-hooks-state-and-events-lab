import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleIsInCart() {
    setIsInCart((isInCart) => !isInCart);
  }

  const classItem = isInCart ? "in-cart" : "";

  return (
    <li className={classItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleIsInCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
