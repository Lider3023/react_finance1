import React, { type FC } from "react";
import { arrow, user } from "../utils/img";
import { Link, useNavigate } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout/LoginLayout";

const ResetPassword: FC = () => {
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate('/success-reset-password')
  }
    return (
    <>
      <LoginLayout>
        <form
          className="reset__right_box"
          onSubmit={(event) => handleSubmit(event)}
        >
          <Link to="/login" className="arrow">
            <img src={arrow} alt="" />
          </Link>
          <h2 className="reset__right_box_title">Reset Your Password</h2>
          <p className="reset__right_box_text">
            Input your email address account to receive a reset link
          </p>
          <div className="reset__right_box_inputs">
            <label className="reset__right_box_inputs_email">
              <img src={user} alt="" className="user" />
              Email
              <input
                type="email"
                required
                className="reset__right_box_inputs_input"
                placeholder="Enter Your Email"
              />
            </label>
          </div>

          <button className="reset__right_box_btn">Continue</button>
        </form>
        <span className="rights">© 2022 Finlab. All rights reserved.</span>
      </LoginLayout>
    </>
  );
};

export default ResetPassword;
