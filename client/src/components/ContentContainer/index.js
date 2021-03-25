import React from "react";
import "./style.css";

const ContentContainer = (props) => {
  return (
    <div className="wrapper">
      <div className="p-0 container-fluid">{props.children}</div>
    </div>
  );
};

export default ContentContainer;
