const express = require("express");
const router = express.Router(); // Create express router
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContact); // Get all contacts

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact); //if we have a common route then it is preferable to reduce the code

module.exports = router; // Export router
