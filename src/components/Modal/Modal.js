import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import { addProduct, deleteProduct, deleteAllProducts, resetCart, setModalVisibility } from "actions/cart";

import Button from "components/Button/Button";
import ModalItem from "components/ModalItem/ModalItem";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById('root-modal');

const EmptyCart = () => (
  <div className={styles.Empty}>Your cart is empty</div>
)

const Modal = ({ cart, sortedCart, sum }) => {
  const dispatch = useDispatch();
  const uniqProducts =  Object.keys(sortedCart);
  console.log(cart)

  return createPortal(
    <div className={styles.Root}>
    <div className={styles.Container}>
      <div className={styles.Modal}>
        <div className={styles.Headers}>
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>
        {cart.length === 0 && <EmptyCart />}
        {cart.length > 0 && uniqProducts.map(item => {
          const product = sortedCart[item].items[0];
          return (
              <ModalItem
                key={product.id}
                product={product}
                quantity={sortedCart[item].items.length}
                total={sortedCart[item].total.toFixed(2)}
                onAdd={() => dispatch(deleteProduct(product))}
                onDelete={() => dispatch(addProduct(product))}
                onDeleteAll={() => dispatch(deleteAllProducts(product))}
              />
          )}
        )}
        <div className={styles.SumContainer}>
          <div className={styles.TotalCost}>Total cost:
            <span className={styles.TotalSum}> ${sum.toFixed(2)}</span>
          </div>
          <div title="Reset cart" onClick={() => dispatch(resetCart())} className={styles.Reset}>
            <i className="icon-trash" />
          </div>
        </div>
        <div className={styles.Close}>
          Close
          <Button onClick={() => dispatch(setModalVisibility(false))} size="small">X</Button>
        </div>
      </div>
    </div>
  </div>,
    modalRoot);
}

export default Modal;
