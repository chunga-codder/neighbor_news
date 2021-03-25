import React, { useRef, useState } from "react";
import Container from "./../Container";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import "./style.css";
import { AiFillCamera } from "react-icons/ai";
const imgPath = process.env.PUBLIC_URL + "/img/";

function RegistrationForm() {
  const [form, setForm] = useState();
  const history = useHistory();
  const profileImgInput = useRef(null);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.registerUser(form);
      history.push("/");
      window.location.reload(false);
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.msg);
    }
  };

  return (
    <Container>
      <div className="row">
        <h2 className="text-center">Create Account</h2>
        <hr />
        <form
          className="signup pt-1"
          method="POST"
          enctype="multipart/form-data"
          onSubmit={submit}
        >
          {/* Upload Image Section */}
          <div className="d-flex justify-content-center">
            <div id="profile-container">
              <img
                id="profileImage"
                src={`${imgPath}default_avatar.png`}
                alt="Avatar"
              />
              <div className="icon-container">
                <div className="camera-icon">
                  <AiFillCamera />
                </div>
              </div>
            </div>
            <input
              ref={profileImgInput}
              id="profile-img-input"
              type="file"
              name="profile_image"
              placeholder="Profile Image"
              accept="image/png, image/jpeg"
            />
          </div>
          <small
            className="form-text text-center text-muted"
            id="profile-img-validation"
          >
            Choose Image
          </small>

          {/* Name input */}
          <div className="form-row">
            <div className="form-group col-4">
              <label for="firstName-input">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstName-input"
                required
                onChange={onChange}
                name="firstName"
              />
              <small id="first-name-validation" className="form-text"></small>
            </div>
            <div className="form-group col-4">
              <label for="lastName-input">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastName-input"
                required
                onChange={onChange}
                name="lastName"
              />
              <small id="last-name-validation" className="form-text"></small>
            </div>
            <div className="form-group col-4">
              <label for="lastName-input">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                id="displayName-input"
                required
                onChange={onChange}
                name="displayName"
              />
              <small id="last-name-validation" className="form-text"></small>
            </div>
          </div>
          <div className="form-row">
            {/* Email Input */}
            <div className="form-group col-7">
              <label for="email-input">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email Address"
                required
                onChange={onChange}
                name="email"
              />
              <small id="email-validation" className="form-text"></small>
            </div>
            {/* Phone Input  */}
            <div className="form-group col-5">
              <label for="phone-input">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone-input"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="Phone Number"
                required
                onChange={onChange}
                name="phoneNumber"
              />
              <small id="phone-validation" className="form-text"></small>
            </div>
          </div>

          {/* Street Address input of user */}
          <div className="form-group">
            <label for="street-address-input">Street Address</label>
            <input
              type="text"
              className="form-control"
              id="street-address-input"
              placeholder="Street Address"
              required
              onChange={onChange}
              name="streetAddress"
            />
          </div>
          <div className="form-row">
            {/* City of user */}
            <div className="form-group col-4">
              <label for="city-input">City</label>
              <input
                type="text"
                className="form-control"
                id="city-input"
                placeholder="City"
                required
                onChange={onChange}
                name="city"
              />
            </div>

            {/* State of user */}
            <div className="form-group col-2">
              <label for="state-input">State</label>
              <input
                type="text"
                className="form-control"
                id="state-input"
                placeholder="State"
                required
                onChange={onChange}
                name="state"
              />
            </div>

            {/* Zipcode of user */}
            <div className="form-group col-4">
              <label for="zipcode-input">Zipcode</label>
              <input
                type="text"
                className="form-control"
                id="zipcode-input"
                placeholder="Zipcode"
                required
                onChange={onChange}
                name="zipCode"
              />
            </div>

            {/* Country of user */}
            <div className="form-group col-2">
              <label for="country-input">Country</label>
              <input
                type="text"
                className="form-control"
                id="country-input"
                placeholder="Country"
                required
                onChange={onChange}
                name="country"
              />
            </div>
          </div>

          {/* Password Input  */}
          <div className="form-group">
            <label for="password-input">Password</label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              placeholder="Password"
              required
              onChange={onChange}
              name="password"
            />
            {/* Strong Password Validation */}
            <small id="pwd-validation" className="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces.
            </small>
          </div>
          {/* Confirm Password Input */}
          <div className="form-group">
            <label for="confirm-password-input">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm-password-input"
              placeholder="Confirm Password"
              required
              onChange={onChange}
              name="passwordCheck"
            />
            <small id="confirm-pwd-validation" className="form-text"></small>
          </div>
          <br />
          <span className="text-black-50">
            By clicking <b>"Submit"</b>, you agree to the storage and handling
            of your data by this website in accordance with our
            <a href="/"> Privacy Policy</a>
          </span>
          <br />
          <br />
          <button className="btn btn-default btn-primary">Submit</button>
        </form>
        <br />
        <p>
          Already a member? Log in <a href="/login">here</a>
        </p>
      </div>
    </Container>
  );
}

export default RegistrationForm;
