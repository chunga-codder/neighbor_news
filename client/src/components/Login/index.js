import React, { useState } from "react";
import Container from "./../Container";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState();
  const [userData, setUserData] = useState();
  const history = useHistory();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.loginUser(form);
      console.log(data);
      setUserData({
        token: data.token,
        user: data.user,
      });

      localStorage.setItem("auth-token", data.token);
      await history.push("/account");
      window.location.reload(false);
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.msg);
    }
  };

  // useEffect(() => {
  //   if (userData.user) history.push("/");
  // }, [userData.user, history]);

  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center font-weight-bold">Login</h3>
          <p className="text-muted text-center">
            Welcome Back! Please login to your account
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form
            className="signin pt-1"
            method="POST"
            enctype="multipart/form-data"
            onSubmit={submitLoginForm}
          >
            {/* Email Input */}
            <div className="form-group col-12">
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
            <div className="form-group col-12">
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
            </div>
            <div className="col-md-12">
              <button className="btn btn-default btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
