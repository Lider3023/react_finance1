import React, { useState, type FC } from "react";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import { Link, useNavigate } from "react-router-dom";
import { arrow, bar, eyeOpen, eyeSlash, lock } from "../utils/img";

const PasswordChange: FC = () => {
  const [show1, setShow1] = useState(false);
  const toggleShow1 = () => {
    setShow1(!show1);
  };
  const [show2, setShow2] = useState(false);
  const toggleShow2 = () => {
    setShow2(!show2);
  };
  const password1 = !show1 ? "password" : "text";
  const eyeImg1 = !show1 ? eyeSlash : eyeOpen;
  const password2 = !show2 ? "password" : "text";
  const eyeImg2 = !show2 ? eyeSlash : eyeOpen;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <LoginLayout>
        <form
          className="new_password__right_box"
          onSubmit={(event) => handleSubmit(event)}
        >
          <Link to="/login" className="arrow">
            <img src={arrow} alt="" />
          </Link>
          <h2 className="new_password__right_box_title">Create New Password</h2>
          <p className="new_password__right_box_text">
            Send your email account to reset password & make new password
          </p>
          <div className="new_password__right_box_inputs">
            <label className="new_password__right_box_inputs_password">
              <img className="lock" src={lock} alt="" />
              New Password
              <input
                type={password1}
                required
                className="new_password__right_box_inputs_input"
                placeholder="Enter Your New Password"
              />
              <img className="eye" src={eyeImg1} alt="" onClick={toggleShow1} />
            </label>
            <div className="new_password__right_box_inputs_quality">
              <p className="new_password__right_box_inputs_quality_text">
                Min 8 Characters with a combination of letters and numbers
              </p>
              <div className="new_password__right_box_inputs_quality_bar">
                <img
                  src={bar}
                  alt=""
                  className="new_password__right_box_inputs_quality_bar_image"
                />
                <span className="new_password__right_box_inputs_quality_bar_span">Strong</span>
              </div>
            </div>
            <label className="new_password__right_box_inputs_password">
              <img className="lock" src={lock} alt="" />
              Repeat Password
              <input
                type={password2}
                required
                className="new_password__right_box_inputs_input"
                placeholder="Repeat Your Password"
              />
              <img className="eye" src={eyeImg2} alt="" onClick={toggleShow2} />
            </label>
          </div>

          <button className="new_password__right_box_btn">Continue</button>
        </form>
        <span className="rights">© 2022 Finlab. All rights reserved.</span>
      </LoginLayout>
    </>
  );
};

export default PasswordChange;
