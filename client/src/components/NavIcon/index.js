import React from "react";
import "./style.css";

function NavIcon(props) {
  return (
    <a href={props.path} className="nav-icon">
      <span>{props.icon}</span>
      <span className="badge">{props.count}</span>
    </a>
  );
}

export default NavIcon;
