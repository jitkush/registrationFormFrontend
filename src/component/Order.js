import React, { useRef, useState } from "react";
import { addOrder } from "../API/orderApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = () => {
  let response;
  const [order, setOrder] = useState(true);
  const [res, setRes] = useState();
  const [err, setErr] = useState();
  const user_id = useRef(null);
  const contactNumber = useRef(null);
  const sub_total = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    response = await addOrder({
      user_id: user_id.current.value,
      contactNumber: contactNumber.current.value,
      sub_total: sub_total.current.value,
    });
    console.log(response);
    if (response.data?.errors) {
      toast.error("Add order failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setErr((prev) => (prev = response.data.errors));
      setRes(null);
    } else {
      toast.success("Order added successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setRes((prev) => (prev = response.data));
      setErr(null);
      console.log(response);
      setOrder((prev) => !prev);
    }
  };

  return (
    <div className="modal-container">
      Add order
      <div className="register-login">
        <form onSubmit={handleSubmit}>
          <label>User_id</label>
          <br />
          <input type="text" ref={user_id} />
          <br />
          <label>Contact</label>
          <br />
          <input type="text" ref={contactNumber} />
          <br />
          <label>Total</label>
          <br />
          <input type="number" ref={sub_total} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      {res ? (
        <div className="response-info">
          user_id:{res.user_id}
          <br />
          contact:{res.contactNumber}
          <br />
          sub_total:{res.sub_total}
        </div>
      ) : null}
      {err ? (
        <div className="response-info">
          {err.map((item) => (
            <div>{item.msg}</div>
          ))}
        </div>
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default Order;
