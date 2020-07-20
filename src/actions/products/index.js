export const ACTION_TYPES = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR: "FETCH_PRODUCTS_ERROR",
};

const fetchProducts = () => ({ type: ACTION_TYPES.FETCH_PRODUCTS });
const fetchProductsSuccess = (products) => ({
  type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  products,
});
const fetchProductsError = () => ({ type: ACTION_TYPES.FETCH_PRODUCTS_ERROR });

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProducts());

      const response = await fetch("https://d24huwa7xw9s1p.cloudfront.net");
      const products = await response.json();

      dispatch(fetchProductsSuccess(products));
    } catch (e) {
      console.error(e.message);
      dispatch(fetchProductsError());
    }
  };
};
