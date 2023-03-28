import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, price, image, rating, title }) {

  const [{},dispatch] = useStateValue();

  const addToBasket=()=>{
    // Add item to basket ..
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    })
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt=""/>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
