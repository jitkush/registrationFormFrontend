import React, { useRef, useState } from "react";
import "./../App.css";
import { login, signup } from "../API/registrationApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  let response;
  const [isSignUp, setIsSignUp] = useState(true);
  const [res, setRes] = useState();
  const [err, setErr] = useState();
  const Name = useRef();
  const contactNumber = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      response = await signup({
        name: Name.current.value,
        contactNumber: contactNumber.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      });
    } else {
      response = await login({
        contactNumber: contactNumber.current.value,
        password: password.current.value,
      });
    }

    if (response.data?.errors) {
      toast.error("Signup failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setErr((prev) => (prev = response.data.errors));
      setRes((prev) => (prev = null));
    } else {
      toast.success("Signup success", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setRes((prev) => (prev = response.data));
      setErr((prev) => (prev = null));
      console.log(response);
      setIsSignUp((prev) => !prev);
    }
  };

  return (
    <div className="modal-container">
      Signup/Login
      <div className="register-login">
        <div className="toggel-button">
          <button
            className="button active"
            onClick={() => {
              setIsSignUp((prev) => (prev = true));
            }}
          >
            signup
          </button>
          <button
            className="button active"
            onClick={() => {
              setIsSignUp((prev) => (prev = false));
            }}
          >
            Login
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <section className={isSignUp ? "show" : "hidden"}>
            <label>Name</label>
            <br />
            <input type="text" ref={Name} />
            <br />
          </section>
          <label>Contact</label>
          <br />
          <input type="text" ref={contactNumber} />
          <br />
          <label>Password</label>
          <br />
          <input type="password" ref={password} />
          <br />
          <section className={isSignUp ? "show" : "hidden"}>
            <label>Confirm Password</label>
            <br />
            <input type="password" ref={confirmPassword} />
            <br />
          </section>
          <section>
            <button type="submit">Submit</button>
          </section>
        </form>
      </div>
      {res ? (
        <div className="response-info">
          {res?.name ? res.name : res.user.name}
          <br />
          {res?.contactNumber ? res.contactNumber : res.user.contactNumber}
          <br />
          {res?._id ? res._id : res.user._id}
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

export default RegistrationForm;
