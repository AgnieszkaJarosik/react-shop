import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../../actions/products";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";

import ProductService from "services/ProductService";
import ProductsList from "components/ProductsList/ProductsList";

const ProductsSection = ({ title, products }) => (
  <>
    <HeaderSmall>{title}</HeaderSmall>
    <ProductsList products={products} />
  </>
);

const HomePage = () => {
  const products = useSelector(store => store.products.products );
  const dispatch = useDispatch();
  const [featuredDesktop, setFeaturedDesktop] = useState([]);
  const [featuredTablet, setFeaturedTablet] = useState([]);

  useEffect(() => {
    if(products.length === 0) {
      dispatch(fetchData());
    }
  },[]);

  useEffect(() => {
    setFeaturedDesktop(ProductService.getProductsByFilter(products, {
      category: "desktop",
      featured: true
    }));
    setFeaturedTablet(ProductService.getProductsByFilter(products, {
      category: "tablet",
      featured: true
    }));
  }, [products]);

  return (
    <>
      <HeaderBig>Welcome to our store</HeaderBig>
      <ProductsSection title="Desktops" products={featuredDesktop} />
      <ProductsSection title="Tablets" products={featuredTablet} />
    </>
  );
}

export default HomePage;
