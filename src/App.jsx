import { useState } from "react";
import Page1 from "./LandingPage/Page1";
import Navbar from "./Navbar/Navbar";

import Latestbrand from "./LandingPage/Latestbrand";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Page1 />
      <Latestbrand />
      <Footer />
    </>
  );
}

export default App;
