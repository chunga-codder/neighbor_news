import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";

function Home(props) {
  return (
    <div>
      {props.userData.user ? (
        <Banner
          backgroundImage="https://i.pinimg.com/564x/87/f5/0a/87f50a74c7fe20e185045d65492a9052.jpg"
          title= {props.userData.user.firstName}
          user= {props.userData.user}
        ></Banner>
      ) : (
        <Banner
          backgroundImage="https://i.pinimg.com/564x/87/f5/0a/87f50a74c7fe20e185045d65492a9052.jpg"
          title= "Neighbor"
        ></Banner>
      )}
    </div>
  );
}

export default Home;
