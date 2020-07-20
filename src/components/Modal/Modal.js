import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import { addProduct, deleteProduct, resetCart, setModalVisibility } from "../../actions/cart";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById('root-modal');

const Modal = ({ cart }) => {
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

  const uniqProducts =  Object.keys(sortedCart);

  return createPortal(<div className={styles.Root}>
    <div className={styles.Container}>
      <div className={styles.Modal}>
        <div className={styles.Headers}>
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>
        {cart && uniqProducts.map(item => {
          const product = sortedCart[item].items[0];
          return (
            <div key={product.id} className={styles.Product}>
              <div className={styles.ImgNameContainer}>
                <img className={styles.Image} src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
              </div>
              <div className={styles.DetailsContainer}>
                <h5>${product.amount}</h5>
                <div className={styles.Quantity}>
                  <div onClick={() => dispatch(addProduct(product))} className={styles.QuantityButton}>+</div>
                  <h5>{sortedCart[item].items.length}</h5>
                  <div onClick={() => dispatch(deleteProduct(product))} className={styles.QuantityButton}>-</div>
                </div>
                <h5>${sortedCart[item].total.toFixed(2)}</h5>
              </div>
          </div>
          )}
        )}
        <div className={styles.TotalCost}>Total cost:
          <span className={styles.TotalSum}> ${sum.toFixed(2)}</span>
        </div>
        <div title="Reset cart" onClick={() => dispatch(resetCart())} className={styles.Reset}>
          <i className="icon-trash"></i>
        </div>
        <button
          type="button"
          onClick={() => dispatch(setModalVisibility(false))}
          className={styles.CloseButton}>
          X
        </button>
      </div>
    </div>
  </div>,
    modalRoot);
}

export default Modal;
