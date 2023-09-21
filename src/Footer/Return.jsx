import React from "react";
import "./Return.css"

const Return = () => {
  return (
    <div className="Return">
      <h1 className="re-policy">RETURN POLICY</h1>
      <div>
        <h2 className="re-instruct">RETURN INSTRUCTION</h2>
        <p className="return-p">
          To start a return, visit the contact page <span>HERE</span>
        </p>
        <h2 className="re-txt">REFUNDS</h2>
        <p className="return-p">We unfortunately do not offer refunds.</p>
        <p className="return-p">Orders can only be returned for a store credit.</p>
        <h2 className="re-txt">SHIPPING</h2>
        <p className="return-p">
          You will be responsible for paying your own shipping costs for
          returning your item.
        </p>
        <p className="return-p">
          Shipping cost are non refundable, shipping costs will only be
          refundable, shipping costs will only be refunded if there is an error
          with the order.
        </p>
      </div>
      <h2 className="re-txt">DAMAGED, DEFECTIVE AND INCORRECT ITEMS.</h2>
      <p className="return-p">
        If you receive a defective, damaged or the incorrect item please{" "}
        <span>contact us</span> within 2 days of receiving your package
      </p>
      <h2 className="re-txt">CANCELLATION</h2>
      <p className="return-p">
        We unfortunately cannot guarantee cancellation if the order has started
        processing. To make sure you receive your order in time, we will start
        processing the orders as soon as we receive it , this means once your
        order has been placed you may not be able to cancel it.
      </p>
      <h2 className="re-txt">EDITING AN ORDER</h2>
      <p className="return-p">
        Please make sure your shipping address is complete and correct before
        you check out, we may not be able to edit the order before it ships out.
      </p>
      <p className="return-p">
        We may not be able to make changes to your order after it is confirmed.
        Please make sure to add the correct items in the correct sizes plus any
        coupon codes you may have before placing your order
      </p>
      <h2 className="re-txt">PRICE ADJUSTMENTS</h2>
      <p className="return-p">
        Our prices change in response to demand, fashion trends, inventory, and
        promotions, so unfortunately we will not refund or credit the difference
        between your purchase price and the current price available.
      </p>
    </div>
  );
};

export default Return;
