import React from "react";

import Button from "../Button/Button";

import styles from "./ModalItem.module.css";
import {deleteAllProducts} from "../../actions/cart";

const ModalItem = ({ product, total, quantity, onAdd, onDelete, onDeleteAll }) => (
  <div className={styles.Product}>
    <div className={styles.ImgNameContainer}>
      <img className={styles.Image} src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
    </div>
    <div className={styles.DetailsContainer}>
      <h5>${product.amount}</h5>
      <div className={styles.Quantity}>
        <Button onClick={onAdd} size="small" disabled={quantity<=1}>-</Button>
        <h5>{quantity}</h5>
        <Button onClick={onDelete} size="small">+</Button>
      </div>
      <h5>${total}</h5>
    </div>
    <div className={styles.DeleteContainer} title="Delete product" onClick={onDeleteAll}>
      <i className="icon-trash-empty"></i>
    </div>
  </div>
);

export default ModalItem;
