import React from "react";
import "./style.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavIcon from "../NavIcon";
import { FaMapMarkerAlt, FaStore, FaCalendarAlt, FaTags } from "react-icons/fa";
import { RiMessage2Fill, RiLogoutBoxRFill } from "react-icons/ri";
import { SiAddthis } from "react-icons/si";

import {
  AiTwotoneBell,
  AiFillSafetyCertificate,
  AiTwotoneHome,
  AiFillSetting,
} from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function Navigation(props) {
  const history = useHistory();
  const imgPath = process.env.PUBLIC_URL + "/img/";

  const dropdownLink = {
    padding: "0px",
    marginLeft: "0px",
  };

  return (
    <>
      {props.userData.user ? (
        <Menu style={{ top: "0px", right: "0px" }}>
          <a className="menu-item" href="/">
            <AiTwotoneHome style={{ marginRight: "8px" }} /> Home
          </a>
          <a className="menu-item" href="/productlist">
            <FaTags style={{ marginRight: "8px" }} /> For Sale & Free
          </a>
          <a className="menu-item" href="/upload">
            <SiAddthis style={{ marginRight: "8px" }} /> List a product
          </a>
        </Menu>
      ) : null}
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={`${imgPath}neighbor.png`}
            className="d-inline-block align-top logo"
          />{" "}
          Hey, Neighbor
        </Navbar.Brand>

        <Nav className="ml-auto">
          {/* This is shown when the uer is logged in  */}
          {props.userData.user ? (
            <>
              <div
                className="navbar-links-div"
                style={{ display: "flex", paddingRight: "10px" }}
              >
                <Nav.Link
                  onClick={() => {
                    history.push("/account");
                  }}
                  style={{ paddingRight: "0px", marginRight: "-3px" }}
                >
                  <img
                    id="profileImage"
                    src={`${imgPath}default_avatar.png`}
                    alt="Avatar"
                    width="30px"
                  />
                </Nav.Link>
                <NavDropdown
                  title={`${props.userData.user.firstName} ${props.userData.user.lastName}`}
                  id="nav-dropdown"
                  className="dropdown-menu-right text-title-case"
                  width="10px"
                  style={{
                    paddingTop: "6px",
                    marginLeft: "0px",
                    paddingLeft: "0px",
                    paddingRight: "20px",
                  }}
                >
                  <NavDropdown.Item style={dropdownLink}>
                    <Nav.Link
                      onClick={() => {
                        props.logout();
                        history.push("/");
                      }}
                    >
                      <RiLogoutBoxRFill style={{ marginRight: "8px" }} />
                      Logout
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item style={dropdownLink}>
                    <Nav.Link
                      onClick={() => {
                        history.push("/account");
                      }}
                    >
                      <AiFillSetting style={{ marginRight: "8px" }} />
                      Profile
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </>
          ) : (
            <>
              <Nav.Link
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  history.push("/register");
                }}
              >
                Register
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
