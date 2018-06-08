import {createStore} from 'redux'

const initialState = {
  products: [
    {id: 1, name: "Auto lujoso", img: "/images/auto-1.jpg"},
    {id: 2, name: "Auto lujoso 2", img: "/images/auto-2.jpg"},
    {id: 3, name: "Auto lujoso 3", img: "/images/auto-3.jpg"}
  ],
  cart: []
}

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART"){
    return {
      ...state,
      cart: state.cart.concat(action.product)
    }
  }
  return state
}

let store = createStore(reducer)

export default store