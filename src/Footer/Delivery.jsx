import React from "react";
import "./Delivery.css";

const Delivery = () => {
  return (
    <div className="Delivery">
      <h1 className="delivery-txt">DELIVERY AND SHIPPING POLICY</h1>

      <h2 className="delivery-h">TENTATIVE PROCESSING AND SHIPPING TIMES</h2>
      <p className="delivery-p">We ship worldwide from Toronto, Ontario </p>

      <div>
        <h2 className="delivery-h">Express/Priority orders</h2>
        <p className="delivery-p">1-2 Business days processing and</p>
        <ul>
          <li className="delivery-li">
            1-2 Business days shipping, overall time 2-4 business days (Lagos,
            Nig)
          </li>
          <li className="delivery-li">
            3-4 Business days shipping, overall time 3-5 business days (Outside
            Lagos, Nig)
          </li>
        </ul>
      </div>
      <h2 className="delivery-h">SHIPPING ADDRESSES</h2>
      <p className="delivery-p">
        Please make sure your shipping address is complete and correct.
      </p>
      <p className="delivery-p">
        We may not be able to accommodate address changes after your order has
        been placed.
      </p>
      <p className="delivery-p">
        Please make sure, apartment numbers are provided and correct.
      </p>
      <h2 className="delivery-h">SHIPPING RATES</h2>
      <ul className="delivery-h">
        <li className="delivery-li">Rates are calculated at checkout</li>
        <li className="delivery-li">Signature available</li>
      </ul>
      <h2 className="delivery-h">PRE-ORDER ITEMS</h2>
      <p className="delivery-p">
        Pre-order item(s) have their 'Shipping Starts' date in the item
        description, it is the date they become available to start shipping out.{" "}
        <br /> Processing time will start on that date provided and will be 1-2
        business days for express orders and 3-7 business days for standard
        orders.
      </p>
      <p className="delivery-p">
        If your order has a pre-order item all the items will ship together.{" "}
        <br /> If you wish to split up the order, there will be an additional
        shipping cost
      </p>
      <h2 className="delivery-h">ITEM NOT DELIVERED?</h2>
      <p className="delivery-p">
        If you have not yet received your order within the estimated delivery
        time, please allow an extra 2-3 days because packages may be delayed.
      </p>
      <p className="delivery-p">
        if after contacting the shipping company you still need assistance
        regarding locating your order feel free to contact us at
        pablodimension@gmail.com and one of our representatives will be happy to
        assist you.
      </p>
    </div>
  );
};

export default Delivery;
