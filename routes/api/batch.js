const router = require("express").Router();
const booksController = require("../../controllers/batchController");

// Matches with "/api/batch"
router.route("/")
  .get(batchController.findAll)
  .post(batchController.create);

// Matches with "/api/batch/:id"
router
  .route("/:id")
  .get(batchController.findById)
  .put(batchController.update)
  .delete(batchController.remove);

module.exports = router;