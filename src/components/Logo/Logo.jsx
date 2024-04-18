import React from "react";
import icon from "./../../assets/logo/favicon.png";
import "./Logo.scss";
const Logo = () => {
  return (
    <div className="logo">
      <img src={icon} alt="Student's guide" height={150} />
    </div>
  );
};

export default Logo;
