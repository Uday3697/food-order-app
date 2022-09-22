import React, { useState } from "react";
import Login from "./Login";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("myEmail", JSON.stringify(email));
      localStorage.setItem("myPssword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div>
      <div>
        {" "}
        {login ? (
          <div className="main-con">
          <div className="reg-con">
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>
            <input
              className="inp-bx"
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="inp-bx"
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="inp-bx"
              type="password"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              className="inp-bx"
              type="text"
              placeholder="Enter Mobile Num.."
              onChange={(event) => setPhone(event.target.value)}
            />
            <button className="inp-bx btn">Register</button>
            <p onClick={handleClick} className="txt ">
              Already registered log in?
            </p>
            {flag && (
              <h4>
                I got it you are in hurry! But every Field is important!
              </h4>
            )}
          </form>
          </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default Registration;
