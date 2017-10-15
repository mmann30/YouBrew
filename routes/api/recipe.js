const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// Matches with "/api/sale"
router.route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);

// Matches with "/api/sale/:id"
router
  .route("/:id")
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);

module.exports = router;