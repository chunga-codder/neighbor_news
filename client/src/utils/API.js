import axios from "axios";

export default {
  // Gets user login
  getUser: function (token) {
    return axios.get("/users", {
      headers: { "x-auth-token": token },
    });
  },
  // Register users
  registerUser: function (form) {
    return axios.post("/users/register", form);
  },
  // Delete users
  deleteUser: function (token) {
    return axios.delete("/users/delete", {
      headers: { "x-auth-token": token },
    });
  },
  tokenIsValid: function (token) {
    return axios.get("/users/tokenIsValid", {
      headers: { "x-auth-token": token },
    });
  },
  // Delete token
  deleteConfirm: function (token) {
    return axios.delete("/confirm", {
      headers: { "x-auth-token": token },
    });
  },
  // login user
  loginUser: function (form) {
    return axios.post("/users/login", form);
  },
  // Update users
  updateUser: function (id, userUpdates) {
    return axios.patch("/users/" + id, userUpdates);
  },
  // Gets all posts
  getPosts: function () {
    return axios.get("/blog/");
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/blog/" + id);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/blog/" + id);
  },
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/blog/", postData);
  },
};
