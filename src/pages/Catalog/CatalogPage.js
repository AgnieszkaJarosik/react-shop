import React, { useState, useEffect } from "react";

import {useSelector} from "react-redux";

import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsList/ProductsList";
import Filters from "./components/Filters/Filters";

import useFilter from "hooks/useFilter";

import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const isLoading = useSelector(state => state.products.isLoading);
  const isError = useSelector(state => state.products.isError);
  const [products, setProducts, getManufactures ] = useFilter();
  const [filter, setFilter] = useState({
    text: "",
    manufacture: "All"
  });

  useEffect(() => {
    setProducts({
      name: filter.text,
      manufacture: filter.manufacture === "All" ? null : filter.manufacture
    });
  }, [filter, isLoading]);

  const manufacturers = ["All", ...getManufactures()];

  const handleFilterChange = filters => {
    setFilter(filters);
  };

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError) {
    return <div>Error...</div>
  }

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
          <ProductsList products={products} />
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
