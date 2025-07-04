import React, { useState, type FC } from "react";
import "./Navbar.scss";
import { bell, burger, close, logo, search, user } from "../../utils/img";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Navbar: FC = () => {
  const [show, setShow] = useState(false);
  const openBurger = () => {
    setShow(true);
  };
  const closeBurger = () => {
    setShow(false);
  };
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/login')
  }
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="navbar">
            <img src={burger} alt="" className="burger" onClick={openBurger} />
            <div className="navbar_links">
              <Link to="/dashboard/overview">
                <img src={logo} alt="" />
              </Link>
              <ul className="navbar_links_list">
                <li>
                  <NavLink to="/dashboard/overview" className="link">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wallets" className="link">
                    Wallets
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings" className="link">
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/help" className="link">
                    Help & Center
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar_info">
              <div className="navbar_info_search">
                <img src={search} alt="" />
                <input type="text" placeholder="Search..." />
              </div>
              <img src={bell} alt="" className="navbar_info_bell" />
              <img src={user} alt="" className="navbar_info_user" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {show && (
              <div className="menu">
                <motion.div
                  className="menu_links"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={close}
                    alt=""
                    className="close"
                    onClick={closeBurger}
                  />
                  <Link to="/" className="logo">
                    <img src={logo} alt="" />
                  </Link>
                  <ul className="menu_links_list">
                    <li>
                      <NavLink to="/dashboard/overview" className="link">
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/wallets" className="link">
                        Wallets
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/settings" className="link">
                        Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/help" className="link">
                        Help & Center
                      </NavLink>
                    </li>
                  </ul>
                  <button onClick={handleClick} className="logout">Log Out</button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
