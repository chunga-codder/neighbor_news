import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div
      className="banner-image"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundImage})`,
      }}
    >
      <div className="banner-text">
        <h1>Welcome {props.title}!</h1>
        <p>{props.subtitle}</p>
        <br />

        {props.user ? (
          <div>
            <Link to="/upload">
              <button>Upload </button>
            </Link>
            <Link to="/productlist">
              <button>Products</button>
            </Link>
          </div>
      ) : (
        <div>
          <Link to="/login">
            <button>Login </button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      )}
      </div>
    </div>
  );
}

export default Banner;
