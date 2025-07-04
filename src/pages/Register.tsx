import React, { useState, type FC } from 'react'
import { arrow, eyeOpen, eyeSlash, lock, user } from '../utils/img';
import LoginLayout from '../layout/LoginLayout/LoginLayout';
import { Link, useNavigate } from 'react-router-dom';

const Register:FC = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const password=!show ? 'password': 'text'
  const eyeImg=!show ? eyeSlash : eyeOpen
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
<>
<LoginLayout>
        <form className="register__right_box" onSubmit={(event)=>handleSubmit(event)}>
          <Link to='/login' className='arrow'><img src={arrow} alt="" /></Link>
          <h2 className="register__right_box_title">
           Create New Account
          </h2>
          <p className="register__right_box_text">Please register by filling in your personal data</p>
          <div className="register__right_box_inputs">
            <label className="register__right_box_inputs_email">
              <img src={user} alt="" className="user" />
              Full name
              <input
                type="text"
                required
                className="register__right_box_inputs_input"
                placeholder="Enter Your Name"
              />
            </label>
            <label className="register__right_box_inputs_email">
              <img src={user} alt="" className="user" />
              Email
              <input
                type="email"
                required
                className="register__right_box_inputs_input"
                placeholder="Enter Your Email"
              />
            </label>
            <label className="register__right_box_inputs_password">
              <img className='lock' src={lock} alt="" />
              Password
              <input
                type={password}
                required
                className="register__right_box_inputs_input"
                placeholder="Enter Your Password"
              />
              <img className='eye'src={eyeImg} alt="" onClick={toggleShow} />
            </label>
          </div>
          
          <button className="register__right_box_btn">Continue</button>
          <div className="register__right_box_register">
            <p className="register__right_box_register_text">
              Already have an account? 
            </p>
            <Link to="/login" className="register__right_box_register_link">
              Login
            </Link>
          </div>
        </form>
        <span className="rights">© 2022 Finlab. All rights reserved.</span>
      </LoginLayout>

</>
)
}

export default Register