const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authMiddleware");
const antibioticsController = require("../controllers/antibiotics");

router.get("/", authenticate, antibioticsController.getAllAntibiotics);
router.get("/:id", authenticate, antibioticsController.getAntibioticById);
router.get(
  "/search/:query",
  authenticate,
  antibioticsController.searchAntibiotic
);

module.exports = router;
