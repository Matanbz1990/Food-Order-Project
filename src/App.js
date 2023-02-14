import { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import Checkout from "./components/Meals/Checkout";
import PopUp from "./components/UI/PopUp";
function App() {
  const [isCartShowen, setIsCartShowen] = useState(false);
  const [isPopupShowen, setIsPopupShowen] = useState(false);
  const [isOrderedPopupShowen, setIsOrderedPopupShowen] = useState(false);

  const [CheckoutIsShowen, setCheckoutIsShowen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupShowen(true);
    }, [2000]);

    // setTimeout(() => {
    //   setIsPopupShowen(false);
    // }, [6000]);
  }, []);
  let openingContent = "New in Matan's Food! Veg Burger and Fruit Salad! ";
  let orderingContent =
    "Food ordered successfully! the recipt will be sent to your E-mail.";

  const ShowCart = () => {
    setIsCartShowen(true);
  };
  const HideCart = () => {
    setIsCartShowen(false);
  };
  const onShowCheckout = () => {
    setCheckoutIsShowen(true);
  };
  const onHideCheckout = () => {
    setCheckoutIsShowen(false);
  };
  const foodIsOrderd = () => {
    console.log("matan ordered app");
    setIsPopupShowen(false);
    setIsOrderedPopupShowen(true);
    setTimeout(() => {
      setIsOrderedPopupShowen(false);
    }, [3000]);
  };

  return (
    <CartProvider>
      {isCartShowen && (
        <Cart onHideCart={HideCart} onShowCheckout={onShowCheckout} />
      )}
      {CheckoutIsShowen && (
        <Checkout onHideCheckout={onHideCheckout} foodIsOrderd={foodIsOrderd} />
      )}
      <Header onShowCart={ShowCart} />

      <main>
        {isPopupShowen && (
          <PopUp
            content={openingContent}
            handleClose={() => {
              setIsPopupShowen(false);
            }}
          />
        )}

        {isOrderedPopupShowen && (
          <PopUp
            content={orderingContent}
            handleClose={() => {
              setIsOrderedPopupShowen(false);
            }}
          />
        )}
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
