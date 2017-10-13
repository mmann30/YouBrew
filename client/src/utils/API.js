import axios from "axios";

//Exports front end routes for api calls to the server
export default {

    // ** Batch API calls **

    getBatches: function() {
        return axios.get("api/batch");
    },
    createBatch(batchData) {
        axios.post("api/batch", batchData);
    },
    getBatch(id) {
        axios.get("api/batch/" + id);
    },
    updateBatch(id) {
        axios.put("api/batch/" + id);
    },
    deleteBatch(id) {
        axios.delete("api/batch/" + id);
    },

    // ** Recipe API Calls **

    getRecipes: function() {
        return axios.get("api/recipe");
    },
    createRecipe(recipeData) {
        axios.post("api/recipe", recipeData);
    },
    getRecipe(id) {
        axios.get("api/recipe/" + id);
    },
    updateRecipe(id) {
        axios.put("api/recipe/" + id);
    },
    deleteRecipe(id) {
        axios.delete("api/recipe/" + id);
    },

    // ** Sale API Calls **

    getSales() {
        axios.get("api/sale");
    },
    createSale(saleData) {
        axios.post("api/sale", saleData);
    },
    getSale(id) {
        axios.get("api/sale/" + id);
    },
    updateSale(id) {
        axios.put("api/sale/" + id);
    },
    deleteSale(id) {
        axios.delete("api/sale/" + id);
    },

    // User API Calls

    getUsers() {
        axios.get("api/user");
    },
    createUser(userData) {
        axios.post("api/user/", userData);
    },
    getUser(id) {
        axios.get("api/user/" + id);
    },
    updateUser(id) {
        axios.put("api/user/" + id);
    },
    deleteUser(id) {
        axios.delete("api/user" + id);
    },

    // Customer API Calls

    getCustomers() {
        axios.get("api/customer");
    },
    createCustomer(customerData) {
        axios.post("api/customer", customerData);
    },
    getCustomer(id) {
        axios.get("api/customer" + id);
    },
    updateCustomer(id) {
        axios.put("api/customer" + id);
    },
    deleteCustomer(id) {
        axios.delete("api/customer" + id);
    },
};
