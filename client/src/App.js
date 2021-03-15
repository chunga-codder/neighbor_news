import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Uploads from "./pages/Upload";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Messages from "./pages/Messages";
import ProductListing from "./pages/ProductListing";
import API from "./utils/API"

function App() {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");

    if (token === null) {
      localStorage.setItem("auth-token", "");
    } else {
      try {
        const userRes = await API.getUser(token);
        setUserData({ token, user: userRes.data });
      } catch (err) {
        console.log("User must login");
      }
    }
  };

  const logout = () => {
    console.log("logout clicked")
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <Router>
      {!userData.user ? (
            <Navbar 
            user={userData}
            name="sending login"
            />
          )
          :
            <Navbar 
            user={userData}
            onClick={logout}
            name="sending logout"
            />
        }
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={Uploads} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/productlist" component={ProductListing} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
