import axios from "axios";
import { push } from 'react-router-redux';
var sessionStorage = require('web-storage')().sessionStorage;

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
    signIn: function(userData) {
        return axios.post("/api/user/signin", userData).then(function(response) {
                console.log(response);
                sessionStorage.set("access_token", response.data.token);
                if (response.data.user.isAdmin === true) {
                    sessionStorage.set("admin_token", response.data.user.isAdmin)
                };
            })

            .catch(function(error) {
                console.log(error);
            });
    },
    // Saves a book to the database
    newUser: function(userData) {
        return axios.post("/api/user/signup", userData).then(function(response) {
                console.log(response);
            }).then(res => {

                push('/availability') /* dispatch an action that changes the browser history */

            })
            .catch(function(error) {
                console.log(error);
            });
    }
};