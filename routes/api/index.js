const router = require("express").Router();
const batchRoutes = require("./batch");
const recipeRoutes = require("./recipe");
const clientRoutes = require("./client");
const saleRoutes = requrie("./sale");
const userRoutes = require("./user");

// Routes
router.use("/batch", batchRoutes);
router.use("/recipe", recipeRoutes);
router.use("/client", clientRoutes);
router.use("/sale", saleRoutes);
router.use("/user", userRoutes);


module.exports = router;