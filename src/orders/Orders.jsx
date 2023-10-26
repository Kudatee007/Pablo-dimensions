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
    <div>
      <h1>Orders</h1>
      <div className="row">
        <div className="col-12">
          <div className="my-row">
            <div className="col-3">
              <h5 className="orderHead">Order Id</h5>
            </div>
            <div className="my-col">
              <h5 className="orderHead">Total Amount</h5>
            </div>
            <div className="col-3">
              <h5 className="orderHead">Total Amount After Discount</h5>
            </div>
            <div className="col-3">
              <h5 className="orderHead">Status</h5>
            </div>
          </div>
        </div>
        <div className="">
          {orderState &&
            orderState?.map((item, index) => {
              return (
                <div className="my-ro" key={index}>
                  <div className="my-row">
                    <div className="my-col">
                      <p className="orderP">{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p className="orderP">{item?.totalPrice}</p>
                    </div>
                    <div className="my-col">
                      <p className="orderP">{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p className="orderP">{item?.orderStatus}</p>
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
                            <p className="orderP">{i?.product?.title}</p>
                          </div>
                          <div className="col-3">
                            <p className="orderP">{i?.quantity}</p>
                          </div>
                          <div className="col-3">
                            <p className="orderP">{i?.price}</p>
                          </div>
                          <div className="my-col">
                          <ul>
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