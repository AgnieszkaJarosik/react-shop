import {ACTION_TYPES} from "actions/cart";

const initialState = {
  cart: [],
  isModalVisible: false
}

const deleteOne = (arr, deleted) => {
  const foundIndex = arr.lastIndexOf(deleted);
  return arr.filter((item, idx) => idx !== foundIndex);
}

export default function (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT:
      return {...state, cart:[...state.cart, action.product]};
    case ACTION_TYPES.DELETE_PRODUCT:
      return {...state, cart: deleteOne(state.cart, action.product)};
    case ACTION_TYPES.DELETE_ALL_PRODUCTS:
      return {...state, cart: state.cart.filter(item => item.id !== action.product.id)};
    case ACTION_TYPES.RESET_CART:
      return {...state, cart: []};
    case ACTION_TYPES.SET_MODAL_VISIBILITY:
      return {...state, isModalVisible: action.isModalVisible}
    default:
      return state;
  }
}
