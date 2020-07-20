import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsList/ProductsList";

import ProductService from "services/ProductService";
import { fetchData } from "actions/products";

import styles from "./CatalogPage.module.css";
import Filters from "./components/Filters/Filters";

const CatalogPage = () => {
  const products = useSelector(store => store.products.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    text: "",
    manufacture: "All"
  });

  useEffect(() => {
      if (products.length === 0) {
        dispatch(fetchData());
      }
    setFilteredProducts(ProductService.getProductsByFilter(products, {}))
  }, [products])

  useEffect(() => {
    const filteredProducts = ProductService.getProductsByFilter(products, {
      name: filter.text,
      manufacture: filter.manufacture === "All" ? null : filter.manufacture
    });

    setFilteredProducts(filteredProducts);
  }, [filter]);

  const manufacturers = ["All", ...ProductService.getManufactures(products)];

  const handleFilterChange = filters => {
    setFilter(filters);
  };

  return (
    <>
      <HeaderBig>Catalog</HeaderBig>

      <div className={styles.Catalog}>
        <div className={styles.ColumnLeft}>
          <Filters
            values={filter}
            onChange={handleFilterChange}
            manufacturers={manufacturers}
          />
        </div>

        <div className={styles.ColumnRight}>
          <ProductsList products={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
