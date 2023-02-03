import React, { useRef, useState } from "react";
import { getOrder } from "../API/orderApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowOrder = () => {
  let response;
  const userId = useRef();
  const [res, setRes] = useState([]);
  const [err, setErr] = useState();
  const getUserOrder = async (e) => {
    response = await getOrder(userId.current.value);

    console.log(response.data.data);
    if (response.data?.errors) {
      toast.error("Request failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setErr((prev) => (prev = response.data.errors));
      setRes(null);
    } else {
      toast.success("Showing list", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setRes((prev) => (prev = response.data.data));
      setErr(null);
    }
  };

  return (
    <div className="modal-container orderList">
      <label>User id</label>
      <input type="text" ref={userId} />
      <button onClick={getUserOrder}>Get order</button>
      {res.length === 0 ? (
        <div>No orders to show</div>
      ) : (
        <table className="App">
          <tr>
            <th>userId</th>
            <th>Contact</th>
            <th>Sub_total</th>
          </tr>
          {res.map((items) => (
            <tr>
              <td>{items.user_id}</td>
              <td>{items.contactNumber}</td>
              <td>{items.sub_total}</td>
            </tr>
          ))}
        </table>
      )}
      <ToastContainer />
    </div>
  );
};

export default ShowOrder;
