import { useState } from "react";
import Page1 from "./LandingPage/Page1";
import Navbar from "./Navbar/Navbar";

import Latestbrand from "./LandingPage/Latestbrand";
import Footer from "./Footer/Footer";
import Latest from "./Shop/Latest";
import Latestdetails from "./Shop-details/Latestdetails";

function App() {
  return (
    <>
      <Navbar />
      {/* <Page1 />
      <Latestbrand /> */}
      {/* <Latest /> */}
      <Latestdetails />
      <Footer />
    </>
  );
}

export default App;
