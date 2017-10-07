const router = require("express").Router();
const saleController = require("../../controllers/saleController");

// Matches with "/api/sale"
router.route("/")
  .get(saleController.findAll)
  .post(saleController.create);

// Matches with "/api/sale/:id"
router
  .route("/:id")
  .get(saleController.findById)
  .put(saleController.update)
  .delete(saleController.remove);

module.exports = router;