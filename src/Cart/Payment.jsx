import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
// import './App.css';

function Payment() {
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state.auth.user);
  console.log(authState);
  const [total, setTotal] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const shipping = 20;
  const totalAmount = total + shipping;
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: totalAmount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_ff3ace27b32e03f132720a4c38669d241b54e842",
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Place Order",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal(sum);
    }
  }, [cartState]);
  console.log(total);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="shipping1">
          <h1 className="pablo-d">Pablo_Dimensions</h1>
          <div className="contact-ship">
            <div className="cont-shipping cont-shipping1">
              <div className="cont-ship">
                <h6 className="conship-txt">Contact</h6>
                <p className="conship-p">{authState?.email}</p>
              </div>
              <p className="conship-change">Change</p>
            </div>
            <div className="cont-shipping">
              <div className="cont-ship">
                <h6 className="conship-txt">Ship to</h6>
                <p className="conship-p">15 Adekunle street, 11022 Lagos NG</p>
              </div>
              <p className="conship-change">Change</p>
            </div>
          </div>
          <div className="ship-method">
            <h1 className="ship-H">Shipping method</h1>
            <div className="ship">
              <div className="ship-check">
                <input type="checkbox" name="" id="" />
                <p className="ship-p">Standard</p>
              </div>
              <p className="ship-price">$19.65</p>
            </div>
          </div>
        </div>
      </header>
      <h2 className="conship-p">Total: {total}</h2>
      <p>Shipping: ${shipping}</p>
      <h1 className="conship-p">Total Amount: {totalAmount}</h1>
      <PaystackButton {...componentProps} />
    </div>
  );
}

export default Payment;
