export const ACTION_TYPES = {
  ADD_PRODUCT: "ADD_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  DELETE_ALL_PRODUCTS: "DELETE_ALL_PRODUCTS",
  RESET_CART: "RESET_CART",
  SET_MODAL_VISIBILITY: "SET_MODAL_VISIBILITY"
};

export const addProduct = (product) => ({
  type: ACTION_TYPES.ADD_PRODUCT,
  product
});

export const deleteProduct = (product) => ({
  type: ACTION_TYPES.DELETE_PRODUCT,
  product
});

export const deleteAllProducts = (product) => ({
  type: ACTION_TYPES.DELETE_ALL_PRODUCTS,
  product
});

export const resetCart = () => ({ type: ACTION_TYPES.RESET_CART });

export const setModalVisibility = (isModalVisible) => ({
  type: ACTION_TYPES.SET_MODAL_VISIBILITY,
  isModalVisible
});

