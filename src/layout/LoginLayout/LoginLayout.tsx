import React, { type FC, type ReactNode } from "react";
import "./LoginLayout.scss";
import { logo } from "../../utils/img";
import {motion} from 'framer-motion'
interface IProps {
  children: ReactNode;
}
const LoginLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <motion.div className="form"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.4}}
      >
        <div className="form__left">
          <div className="form__left_box">
            <img src={logo} alt="" className="form__left_box_logo" />
            <h1 className="form__left_box_title">
              Let’s empower your financial task today with Findash.
            </h1>
            <p className="form__left_box_text">
              The one-stop platform for all financial management of small and
              medium-sized business.
            </p>
          </div>
        </div>
        <div className="form__right">{children}</div>
      </motion.div>
    </>
  );
};

export default LoginLayout;
