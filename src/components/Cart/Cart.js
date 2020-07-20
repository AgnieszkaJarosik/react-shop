import React from "react";
import {useSelector, useDispatch} from "react-redux";

import { setModalVisibility } from "actions/cart";

import Modal from "../Modal/Modal";

import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector(store => store.cart.cart);
  const isModalVisible = useSelector(store => store.cart.isModalVisible);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.Background} onClick={() => dispatch(setModalVisibility(true))}>
        <i className="icon-basket"></i>
        {cart.length > 0 && <div className={styles.Quantity}>{cart.length}</div>}
      </div>
      {isModalVisible && <Modal cart={cart}></Modal>}
    </>
  )
}

export default Cart;
