import React from "react";
import {useSelector, useDispatch} from "react-redux";

import { setModalVisibility } from "actions/cart";

import Modal from "../Modal/Modal";

import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector(store => store.cart.cart);
  const isModalVisible = useSelector(store => store.cart.isModalVisible);
  const dispatch = useDispatch();
  let sum = 0;

  const sortedCart = cart.reduce((acc, curr) => {
    sum += Number(curr.amount);
    if(acc[curr.id]){
      acc[curr.id].items.push(curr);
      acc[curr.id].total += Number(curr.amount);
    } else {
      acc[curr.id] = {
        total: Number(curr.amount),
        items: [curr]
      };
    }
    return acc;
  }, {});

  return (
    <>
      <div className={styles.Cart} onClick={() => dispatch(setModalVisibility(true))}>
        <i className="icon-basket" />
        {cart.length > 0 && <div className={styles.Quantity}>{cart.length}</div>}
      </div>
      {isModalVisible && <Modal cart={cart} sortedCart={sortedCart} sum={sum} />}
    </>
  )
}

export default Cart;
