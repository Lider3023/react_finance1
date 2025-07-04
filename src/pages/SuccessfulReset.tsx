import React, { type FC } from "react";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import { success } from "../utils/img";
import { useNavigate } from "react-router-dom";

const SuccessfulReset: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <LoginLayout>
        <form
          className="success_reset__right_box"
          onSubmit={(event) => handleSubmit(event)}
        >
            <img className='success' src={success} alt="" />
          <h2 className="success_reset__right_box_title">
            Password Sucessfully Reset
          </h2>
          <p className="success_reset__right_box_text">
           Please check your email, and create your new password
          </p>
          <button className="success_reset__right_box_btn">Login now</button>
        </form>
        <span className="rights">© 2022 Finlab. All rights reserved.</span>
      </LoginLayout>
    </>
  );
};

export default SuccessfulReset;
