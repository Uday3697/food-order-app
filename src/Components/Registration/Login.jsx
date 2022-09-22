import React, { useState } from "react";
import './Registration.css'
import Home from "./Home";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("myPssword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("myEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <div className="main-con">
        <div className="reg-con">
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div>
      
            <input
              type="email"
              className="inp-bx"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div >
            
            <input
              type="password"
              className="inp-bx"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <br/> <br/>

          <button type="submit" className="btn ">
            Login
          </button>

          {flag && (
            <h4 color="red" >
              Fill correct Info else keep trying.
            </h4>
          )}
        </form>
        </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
