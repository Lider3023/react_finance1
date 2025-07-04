import React, { type FC } from "react";
import "./Working.scss";
import { Link } from "react-router-dom";


const Working: FC = () => {
  return (
    <div className="working">
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
      <div className="working_text">
        <h2>Hello There! We are working on this page!</h2>
        <h2>Coming Soon!</h2>
        <p>Go To Main Page - <Link to='/dashboard/overview' className="page">Main Page</Link></p>
      </div>
    </div>
  );
};

export default Working;
