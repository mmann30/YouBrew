const router = require("express").Router();
const batchRoutes = require("./batch");

// Book routes
router.use("/batch", batchRoutes);

module.exports = router;