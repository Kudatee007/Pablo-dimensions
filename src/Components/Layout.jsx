import React, {useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Navbar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        icon={false}
      />
    </>
  );
};

export default Layout;
