import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Container from "../components/Container";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

export default function Upload() {
  const { userData } = useContext(UserContext);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [form, setForm] = useState();
  const history = useHistory();

  // This is used to set the form state with what needs to be posted to the database
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Posting to the database
  const postSubmit = async (url) => {
    let blogPost = {
      ...form,
      userId: userData.user.id,
      displayName: userData.user.displayName,
      zipCode: userData.user.zipCode,
      ...url,
    };
    console.log(blogPost);
    try {
      await API.savePost(blogPost);
      history.push("/productlist");
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.msg);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("Error");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let url = { imgUrl: data.url };
          console.log(url);
          postSubmit(url);
        });
      setFileInputState("");
      setPreviewSource("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <div>
        <h1 className="title">Upload Product</h1>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
        )}
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={onChange}
            name="title"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={onChange}
            name="text"
            placeholder="Enter Product Description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlPricearea1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlPricearea1"
            rows="3"
            onChange={onChange}
            name="price"
            placeholder="Enter a Price"
          ></input>
        </div>
        <form className="col-md-8" onSubmit={handleSubmitFile} className="form">
          <label>Upload Image</label>
          <input
            id="imgId"
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-control"
          />
          <button className="btn btn-primary" type="submit">
            Upload
          </button>
        </form>
      </div>
    </Container>
  );
}
