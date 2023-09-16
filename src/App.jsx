import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./LandingPage/Page1";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Latest from "./Shop/Latest";
import Latestdetails from "./Shop-details/Latestdetails";
import Cart from "./Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/collections" element={<Latest />} />
          <Route path="/collection-details" element={<Latestdetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
