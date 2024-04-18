import React from "react";
import styled from "styled-components";
import icon from "./../../assets/logo/favicon.png";

import "./Logo.scss";

const Logo = () => {
  return (
    <LogoContent className="logo">
      <img src={icon} alt="Student's guide" height={150} />
    </LogoContent>
  );
};

const LogoContent = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 32px;
  }
`;

export default Logo;
