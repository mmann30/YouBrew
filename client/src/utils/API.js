import axios from "axios";
import { push } from 'react-router-redux';

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  newUser: function(userData) {
    return axios.post("/api/user/signup", userData).then(function (response) {
    console.log(response);
  }).then(res => {

       push('/availability') /* dispatch an action that changes the browser history */ 

      })
  .catch(function (error) {
    console.log(error);
  });;
  }
};