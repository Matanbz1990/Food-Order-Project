import { useState } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import Checkout from "./components/UI/Checkout";
function App() {
  const [isShowen, setIsShowen] = useState(false);
  const [CheckoutIsShowen, setCheckoutIsShowen] = useState(false);

  const ShowCart = () => {
    setIsShowen(true);
  };
  const HideCart = () => {
    setIsShowen(false);
  };
  const onShowCheckout = () => {
    setCheckoutIsShowen(true);
  };
  const onHideCheckout = () => {
    setCheckoutIsShowen(false);
  };

  return (
    <CartProvider>
      {isShowen && (
        <Cart onHideCart={HideCart} onShowCheckout={onShowCheckout} />
      )}
      {CheckoutIsShowen && <Checkout onHideCheckout={onHideCheckout} />}
      <Header onShowCart={ShowCart} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
