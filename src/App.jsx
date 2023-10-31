import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./LandingPage/Page1";
import Latest from "./Shop/Latest";
import Latestdetails from "./Shop-details/Latestdetails";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Layout from "./components/Layout";
import ResetPass from "./Login/ResetPass";
import Contact from "./Cart/Contact";
import Shipping from "./Cart/Shipping";
import About from "./Footer/About";
import Return from "./Footer/Return";
import Delivery from "./Footer/Delivery";
import Contactus from "./Footer/Contactus";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import Wishlist from "./Shop/Wishlist";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import Payment from "./Cart/Payment";
import Orders from "./orders/Orders";
import Profile from "./profile/Profile";
import Forgotpass from "./Login/Forgotpass";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Page1 />} />
            <Route path="/collections" element={<Latest />} />
            <Route path="/product/:id" element={<Latestdetails />} />
            {/* <Route
              path="/cart"
              element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              }
            /> */}
            <Route element={<PrivateRoutes />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/my-orders" element={<Orders />} />
              <Route path="/my-profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPass />} />
            <Route path="/register-account" element={<Register />} />
            <Route path="/forgot-password/:token" element={<Forgotpass />} />
            <Route path="/contact-info" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/about" element={<About />} />
            <Route path="/return" element={<Return />} />
            <Route path="/delivery-policy" element={<Delivery />} />
            <Route path="/contact-us" element={<Contactus />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
