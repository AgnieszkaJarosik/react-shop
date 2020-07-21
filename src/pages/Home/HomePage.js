import React, {useEffect} from "react";

import {useSelector} from "react-redux";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";
import ProductsList from "components/ProductsList/ProductsList";

import useFilter from "../../hooks/useFilter";

const ProductsSection = ({ title, products }) => (
  <>
    <HeaderSmall>{title}</HeaderSmall>
    <ProductsList products={products} />
  </>
);

const HomePage = () => {
  const isLoading = useSelector(state => state.products.isLoading);
  const isError = useSelector(state => state.products.isError);
  const [featuredDesktop, setFeaturedDesktop] = useFilter();
  const [featuredTablet, setFeaturedTablet] = useFilter();

  useEffect(() => {
    setFeaturedDesktop({
      category: "desktop",
      featured: true
    });
    setFeaturedTablet({
      category: "tablet",
      featured: true
    })
  },[isLoading]);

  if(isLoading) {
    return <div>Loading...</div>
  }
  if(isError) {
    return <div>Error...</div>
  }

  return (
    <>
      <HeaderBig>Welcome to our store</HeaderBig>
      <ProductsSection title="Desktops" products={featuredDesktop} />
      <ProductsSection title="Tablets" products={featuredTablet} />
    </>
  );
}

export default HomePage;
