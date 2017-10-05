const router = require("express").Router();
const batchRoutes = require("./batch");
const recipeRoutes = require("./recipe");

// Routes
router.use("/batch", batchRoutes);
router.use("/recipe", recipeRoutes);

module.exports = router;