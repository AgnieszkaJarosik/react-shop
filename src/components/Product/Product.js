import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "actions/cart";

import Button from "components/Button/Button";

import styles from "./Product.module.css";

const Product = ( product ) => {
  const dispatch = useDispatch();

  return (
      <div className={styles.Product}>
        <img className={styles.Image} src={product.image} alt={product.name} />
        <p className={styles.Price}>${product.amount}</p>
        <h3>{product.name}</h3>
        <Button onClick={() => dispatch(addProduct(product))} size="large">Add to cart</Button>
      </div>
  );
}

export default Product;
