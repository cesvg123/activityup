const router = require("express").Router();
const { groupController } = require("../../controllers");

// routes to /api/groups/
// GET convenience function to find all groups
// POST convenience function to create new groups

// http://localhost:3000/api/groups/
router
  .route("/")
  .get(groupController.find)
  .post(groupController.create);

router.route("/byUser").get(groupController.byUser);

router.route("/group").get(groupController.byGroup)

module.exports = router;
