import { createContext } from "react";


const CartContext = createContext({
  cartList: [],
  foodItemObj: {},
  AddToCart: () => { },
  increaseQuantity: () => { },
  decreaseQuantity: () => { },
  quantity: 1,
  removeCartItem: () => { }
})


export default CartContext