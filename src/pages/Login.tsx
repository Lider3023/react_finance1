import React, { useState, type FC } from "react";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import { eyeOpen, eyeSlash, lock, user } from "../utils/img";
import { Link, useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard/overview");
  };
  const password=!show ? 'password': 'text'
  const eyeImg=!show ? eyeSlash : eyeOpen
  return (
    <>
      <LoginLayout>
        <form className="login__right_box" onSubmit={(event)=>handleSubmit(event)}>
          <h2 className="login__right_box_title">
            Login first to your account
          </h2>
          <div className="login__right_box_inputs">
            <label className="login__right_box_inputs_email">
              <img src={user} alt="" className="user" />
              Email
              <input
                type="email"
                required
                className="login__right_box_inputs_input"
                placeholder="Enter Your Email"
              />
            </label>
            <label className="login__right_box_inputs_password">
              <img className='lock' src={lock} alt="" />
              Password
              <input
                type={password}
                required
                className="login__right_box_inputs_input"
                placeholder="Enter Your Password"
              />
              <img className='eye'src={eyeImg} alt="" onClick={toggleShow} />
            </label>
          </div>
          <div className="login__right_box_links">
            <label className="login__right_box_links_label">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/reset-password" className="link">
              Forgot Password
            </Link>
          </div>
          <button className="login__right_box_btn">Login</button>
          <div className="login__right_box_register">
            <p className="login__right_box_register_text">
              Don’t have an account?
            </p>
            <Link to='/register' className="login__right_box_register_link">
              Register Here
            </Link>
          </div>
        </form>
        <span className="rights">© 2022 Finlab. All rights reserved.</span>
      </LoginLayout>
    </>
  );
};

export default Login;
