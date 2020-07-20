import React from "react";

import styles from "./ProductsList.module.css";

import Product from "components/Product/Product";

const ProductsList = ({ products }) => (
  <div className={styles.Products}>
    {products && products.map(product => (
      <Product key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;
