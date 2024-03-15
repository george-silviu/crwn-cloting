// import { createContext, useReducer } from "react";

// import { createAction } from "../utils/reducer/reducer.utils";

// //moved to cart.selector.js
// const addCartItem = (cartItems, productToAdd) => {
//   //find if productToAdd already exists in cartItems
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   //if found increase quantity by 1
//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   //if not found add cartItemToAdd to cartItems and set quantity to 1
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// //moved to cart.selector.js
// const removeCartItem = (cartItems, productToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToRemove.id
//   );

//   if (existingCartItem.quantity === 1) {
//     return cartItems;
//   }

//   return cartItems.map((cartItem) =>
//     cartItem.id === productToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// //moved to cart.selector.js
// const deleteCartItem = (cartItems, productToDelete) => {
//   return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   deleteItemFromCart: () => {},
//   cartItemsCount: 0,
//   total: 0,
// });

// //migrtated to cart.types.js
// export const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   SET_CART_IS_OPEN: "SET_CART_IS_OPEN",
// };

// /** migrated to cart.reducer.js */
// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartItemsCount: 0,
//   total: 0,
// };

// /** migrated to cart.reducer.js */

// //Reducers should not handle business logic
// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_CART_IS_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       throw new Error(`Unhandled action type: ${type} in cartReducer!`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

//   const { isCartOpen, cartItems, cartItemsCount, total } = state;

//   const updateCartItemsReducer = (newCartItems) => {
//     //moved to cart.selector.js
//     //generate newCartCount
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//     //moved to cart.selector.js
//     //generate newCartTotal
//     const newCartTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );

//     //dispach new action with payload = {newCartItems, newCartTotal, newCartCount}
//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems,
//         cartItemsCount: newCartCount,
//         total: newCartTotal,
//       })
//     );
//   };

//   //moved to cart.action.js
//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemsReducer(newCartItems);
//   };

//   //moved to cart.action.js
//   const removeItemFromCart = (productToRemove) => {
//     const newCartItems = removeCartItem(cartItems, productToRemove);
//     updateCartItemsReducer(newCartItems);
//   };

//   //moved to cart.action.js
//   const deleteItemFromCart = (productToDelete) => {
//     const newCartItems = deleteCartItem(cartItems, productToDelete);
//     updateCartItemsReducer(newCartItems);
//   };

//   //moved to cart.action.js
//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, bool));
//   };

//   const value = {
//     isCartOpen,
//     cartItems,
//     cartItemsCount,
//     total,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemFromCart,
//     deleteItemFromCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
