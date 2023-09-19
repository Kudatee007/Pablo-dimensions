import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./LandingPage/Page1";
import Latest from "./Shop/Latest";
import Latestdetails from "./Shop-details/Latestdetails";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Layout from "./components/Layout";
import ResetPass from "./Login/ResetPass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Page1 />} />
            <Route path="/collections" element={<Latest />} />
            <Route path="/collection-details" element={<Latestdetails />} />
            <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-pass" element={<ResetPass />} />
          </Route>
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
