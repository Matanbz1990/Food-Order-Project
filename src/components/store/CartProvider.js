import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartitem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartitem) {
      updatedItem = {
        ...existingCartitem,
        amount: existingCartitem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    //post request

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartitem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartitem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItem = {
        ...existingCartitem,
        amount: existingCartitem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - existingCartitem.price;

    //delete request
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addingItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removingItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const clearingCart = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addingItem,
    removeItem: removingItem,
    clearCart: clearingCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
