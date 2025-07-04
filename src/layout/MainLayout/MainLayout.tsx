import React, { type FC, type ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./MainLayout.scss";

interface IProps {
  children: ReactNode;
}
const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <div className="mainlayout">
        <Navbar />
        <div className="mainlayout__content"></div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
