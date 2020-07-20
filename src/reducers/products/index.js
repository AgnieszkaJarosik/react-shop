import { ACTION_TYPES } from "actions/products"

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS:
      return { ...initialState };
    case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return { products: action.products, isLoading: false, isError: false };
    case ACTION_TYPES.FETCH_PRODUCTS_ERROR:
      return { products: [], isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
