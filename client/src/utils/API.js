import axios from "axios";

//Exports front end routes for api calls to the server
export default {

    // ** Batch API calls **

    getBatches: function() {
        return axios.get("api/batch");
    },
    createBatch: function(batchData) {
       return axios.post("api/batch", batchData);
    },
    getBatch: function(id) {
        return axios.get("api/batch/" + id);
    },
    updateBatch: function(id) {
        return axios.put("api/batch/" + id);
    },
    deleteBatch: function(id) {
        return axios.delete("api/batch/" + id);
    },

    // ** Recipe API Calls **

    getRecipes: function() {
        return axios.get("api/recipe");
    },
    createRecipe: function(recipeData) {
       return axios.post("api/recipe", recipeData);
    },
    getRecipe: function(id) {
        return axios.get("api/recipe/" + id);
    },
    updateRecipe: function(id) {
       return axios.put("api/recipe/" + id);
    },
    deleteRecipe: function(id) {
       return axios.delete("api/recipe/" + id);
    },

    // ** Sale API Calls **

    getSales: function() {
        return axios.get("api/sale");
    },
    createSale: function(saleData) {
        return axios.post("api/sale", saleData);
    },
    getSale: function(id) {
        return axios.get("api/sale/" + id);
    },
    updateSale: function(id) {
        return axios.put("api/sale/" + id);
    },
    deleteSale: function(id) {
        return axios.delete("api/sale/" + id);
    },

    // User API Calls

    getUsers: function() {
        return axios.get("api/user");
    },
    createUser: function(userData) {
        return axios.post("api/user/", userData);
    },
    getUser: function(id) {
        return axios.get("api/user/" + id);
    },
    updateUser: function(id) {
        return axios.put("api/user/" + id);
    },
    deleteUser: function(id) {
        return axios.delete("api/user" + id);
    },

    // Customer API Calls

    getCustomers: function() {
        return axios.get("api/customer");
    },
    createCustomer: function(customerData) {
        return axios.post("api/customer", customerData);
    },
    getCustomer: function(id) {
        return axios.get("api/customer" + id);
    },
    updateCustomer: function(id) {
        return axios.put("api/customer" + id);
    },
    deleteCustomer: function(id) {
        return axios.delete("api/customer" + id);
    },
};
