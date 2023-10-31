import React, { useEffect } from "react";
import "./Orders.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/users/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getorderedProduct?.orders
  );
  console.log(orderState);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <div className="orders-orders">
      <h1 className="ordersH">Orders</h1>
      <div className="row">
        <div className="col-12">
          <div className="my-row">
            <div className="col-3">
              <h5 className="orderHead">Order Id</h5>
            </div>
            <div className="my-col">
              <h5 className="orderHead">Total Amount</h5>
            </div>
            <div className="col-3 colo">
              <h5 className="orderHead">Total Amount After Discount</h5>
            </div>
            <div className="col-3">
              <h5 className="orderHead">Status</h5>
            </div>
          </div>
        </div>
        <div className="Rows">
          {orderState &&
            orderState?.map((item, index) => {
              return (
                <div className="my-first-row" key={index}>
                  <div className="my-row">
                    <div className="my-col">
                      <p className="order-P">{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p className="order-P">{item?.totalPrice}</p>
                    </div>
                    <div className="my-col colo">
                      <p className="order-P">{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p className="order-P">{item?.orderStatus}</p>
                    </div>
                  </div>
                  <div className="last-col">
                    <div className="my-row">
                      <div className="col-3">
                        <h5 className="orderP">Product Name</h5>
                      </div>
                      <div className="col-3">
                        <h5 className="orderP">Quantity</h5>
                      </div>
                      <div className="col-3">
                        <h5 className="orderP">Price</h5>
                      </div>
                      <div className="my-col">
                        <h5 className="orderP">Color</h5>
                      </div>
                    </div>
                    {item?.orderItems?.map((i, index) => {
                      return (
                        <div className="my-row" key={index}>
                          <div className="col-3">
                            <p className="orderP1">{i?.product?.title}</p>
                          </div>
                          <div className="col-3">
                            <p className="orderP2">{i?.quantity}</p>
                          </div>
                          <div className="col-3">
                            <p className="orderP2">{i?.price}</p>
                          </div>
                          <div className="my-col">
                            <ul className="list-style">
                              <li
                                style={{ backgroundColor: i?.color.title }}
                                className="colorS"
                              ></li>
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
