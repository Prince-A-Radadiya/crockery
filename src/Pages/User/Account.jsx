import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Account = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="account">

      <div id="formContainer" className={toggle ? "toggle" : ""}>
        {/* SWITCH */}
        <div
          id="switch"
          className={toggle ? "toggle" : ""}
          onClick={() => setToggle(!toggle)}
        >
          <div className="bar"></div>
        </div>

        {/* LOGIN FORM */}
        <form id="login" className={toggle ? "toggle" : ""}>
          <div className="formHeader">
            <h1>Login</h1>
          </div>

          <div className="formDiv">
            <input type="text" placeholder="Username" />
            <div className="inputImage">
              <FaUser />
            </div>
          </div>

          <div className="formDiv">
            <input type="password" placeholder="Password" />
            <div className="inputImage">
              <FaLock />
            </div>
          </div>

          <div className="formDiv">
            <label id="remember">
              <input type="checkbox" />
              <div className="checkbox"></div>
              <span>Remember me</span>
            </label>
          </div>

          <div className="formDiv">
            <input type="submit" value="LOGIN" />
          </div>

          <div className="formFooter">
            <a href="#">Forgot Password</a>
          </div>
        </form>

        {/* REGISTER FORM */}
        <form id="register" className={toggle ? "toggle" : ""}>
          <div className="formHeader">
            <h1>Register</h1>
          </div>

          <div className="formDiv">
            <input type="text" placeholder="Username" />
            <div className="inputImage">
              <FaUser />
            </div>
          </div>

          <div className="formDiv">
            <input type="email" placeholder="Email" />
            <div className="inputImage">
              <FaEnvelope />
            </div>
          </div>

          <div className="formDiv">
            <input type="password" placeholder="Password" />
            <div className="inputImage">
              <FaLock />
            </div>
          </div>

          <div className="formDiv">
            <input type="password" placeholder="Repeat Password" />
            <div className="inputImage">
              <FaLock />
            </div>
          </div>

          <div className="formDiv">
            <input type="submit" value="REGISTER" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
