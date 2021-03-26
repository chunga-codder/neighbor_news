import React, { useEffect, useState } from "react";
import API from "./../../utils/API";
import { BsTrashFill, BsPlusCircleFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Jumbotron, Container, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Gallery = () => {
  const history = useHistory();
  const [imageIds, setImageIds] = useState([]);
  const [userData, setUserData] = useState([]);

  const loadImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const getInfo = async () => {
    try {
      const res = await fetch("/blog/");
      const data = await res.json();
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (e) => {
    e.preventDefault();
    try {
      const id = e.target.id;
      await API.deletePost(id);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Container fluid>
      <Jumbotron className="text-center">
        <h1>Product Listings</h1>
        <p>Check out all the products listed for sale in your neighborhood</p>
        <hr />

        <Button
          variant="primary"
          onClick={() => {
            history.push("/upload");
          }}
        >
          List a product
          <BsPlusCircleFill
            style={{ marginLeft: "8px", marginBottom: "3px" }}
          />
        </Button>
      </Jumbotron>

      {userData &&
        userData.map((data, index) => {
          return (
            <Card className="mb-3" style={{ maxWidth: "540px" }} key={index}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <a target="_blank" rel="noreferrer" href={data.imgUrl}>
                    <Card.Img
                      src={data.imgUrl}
                      className="card-img"
                      alt="product"
                    />
                  </a>
                </div>
                <div className="col-md-8">
                  <Card.Body>
                    <Card.Title style={{ textTransform: "capitalize" }}>
                      {data.title}
                    </Card.Title>
                    <Card.Text>
                      <strong>Description: </strong>
                      {data.text}
                      <br />
                      <strong>Price:</strong> ${data.price}
                      <br />
                      <Card.Text style={{ textTransform: "capitalize" }}>
                        <strong>Seller:</strong> {data.displayName}
                      </Card.Text>
                      <Card.Text style={{ textTransform: "capitalize" }}>
                        <strong>Category:</strong> {data.category}
                      </Card.Text>
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Posted at {data.date}
                      </small>
                    </Card.Text>

                    <Button
                      variant="danger"
                      size="sm"
                      id={data._id}
                      onClick={deleteProduct}
                      className="mr-1"
                    >
                      {" "}
                      Delete{" "}
                      <BsTrashFill
                        style={{ marginLeft: "3px", marginBottom: "3px" }}
                      />
                    </Button>
                  </Card.Body>
                </div>
              </div>
            </Card>
          );
        })}
    </Container>
  );
};

export default Gallery;
